// Both trigram and bigram being used
#include <iostream>
#include <fstream>
#include <sstream>
#include <filesystem>
#include "BiTrigramModel.h"
#include "Trie.h"
#include <unordered_map>
#include <httplib.h>

namespace fs = std::filesystem;

// modified processFile function which updates a freqMap for each word
void processFile(const std::string& filePath, Trie& trie, BiTrigramModel& trigramModel, std::unordered_map<std::string, int>& freqMap) {
    std::ifstream file(filePath);
    std::string word, lastWord, secondLastWord;
    if (file.is_open()) {
        std::string line;
        while (getline(file, line)) {
            std::istringstream iss(line);
            lastWord.clear();
            secondLastWord.clear();
            while (iss >> word) {
                trie.insert(word);
                freqMap[word]++;
                if (!secondLastWord.empty() && !lastWord.empty()) {
                    trigramModel.insert(secondLastWord, lastWord, word);
                }
                secondLastWord = lastWord;
                lastWord = word;
            }
        }
        file.close();
    } else {
        std::cerr << "Failed to open the file: " << filePath << std::endl;
    }
}

void initialize(const std::string& username, Trie& trie, BiTrigramModel& trigramModel, std::unordered_map<std::string, int>& freqMap) {
    std::string userFilePath = "../users/" + username + ".txt";
    std::ofstream userFile(userFilePath, std::ios::app);
    userFile.close();

    // process all the txt files in the input folder
    const std::string folderPath = "../input";
    for (const auto& entry : fs::directory_iterator(folderPath)) {
        if (entry.is_regular_file() && entry.path().extension() == ".txt") {
            processFile(entry.path(), trie, trigramModel, freqMap);
        }
    }

    // process the username.txt file
    processFile(userFilePath, trie, trigramModel, freqMap);
}

// void initialize(const std::string& username) {
//     Trie trie;
//     BiTrigramModel trigramModel;
//     std::unordered_map<std::string, int> freqMap;
//     initializeDS(username, trie, trigramModel, freqMap);
// }

bool update (const std::string& username, const std::vector<std::string>& words) {
    std::string userFilePath = "../users/" + username + ".txt";
    std::ofstream userFile(userFilePath, std::ios::app);
    if (!userFile.is_open()) {
        std::cerr << "Failed to open the file: " << userFilePath << std::endl;
        return false;
    }

    // add each vector 10 times to the file
    for (int i = 0; i < 10; i++) {
        for (const auto& word : words) {
            userFile << word << " ";
        }
        userFile << std::endl;
    }

    userFile << std::endl;
    userFile.close();
    return true;
}

// getNext word suggestion using BiTrigramModel
std::vector<std::string> getNextWordSuggestions(const std::string& lastWord, const std::string& currentWord, BiTrigramModel& trigramModel) {
    auto nextWords = trigramModel.predictNextWord(lastWord, currentWord);
    return nextWords;
}

// get auto-completion suggestions using Trie
std::vector<std::string> getAutoCompletionSuggestions(const std::string& currentWord, Trie& trie, std::unordered_map<std::string, int>& freqMap) {
    auto suggestions = trie.autocomplete(currentWord);
    // return suggestions sorted by the freqMap
    std::sort(suggestions.begin(), suggestions.end(), [&freqMap](const std::string& a, const std::string& b) {
        return freqMap[a] > freqMap[b];
    });
    return suggestions;
}

// int main() {
//     Trie trie;
//     BiTrigramModel trigramModel;
//     std::unordered_map<std::string, int> freqMap;

//     const std::string folderPath = "input";
//     for (const auto& entry : fs::directory_iterator(folderPath)) {
//         if (entry.is_regular_file() && entry.path().extension() == ".txt") {
//             processFile(entry.path(), trie, trigramModel, freqMap);
//         }
//     }

//     // // process the username.txt file
//     // processFile(userFilePath, trie, trigramModel, freqMap);

//     std::string input, currentWord, lastWord;
//     std::cout << "Type something: ";

//     // Read input line by line
//     while (std::getline(std::cin, input)) {
//         std::istringstream iss(input);
//         std::string word;
//         while (iss >> word) {
//             lastWord = currentWord;
//             currentWord = word;
//         }

//         // Show auto-completion for the last (possibly incomplete) word
//         auto suggestions = trie.autocomplete(currentWord);
//         std::cout << "Suggestions for '" << currentWord << "': ";
//         if (!suggestions.empty()) {
//             for (const auto& s : suggestions) {
//                 std::cout << s << " ";
//             }
//         } else {
//             std::cout << "no suggestions";
//         }
//         std::cout << std::endl;

//         // Predict the next word based on the last two complete words
//         auto nextWords = trigramModel.predictNextWord(lastWord, currentWord);
//         std::cout << "Next word predictions: ";
//         if (!nextWords.empty()) {
//             for (const auto& w : nextWords) {
//                 std::cout << w << " ";
//             }
//         } else {
//             std::cout << "no predictions";
//         }
//         std::cout << std::endl;

//         std::cout << "Type something: ";
//     }

//     return 0;
// }

// int main(void)
// {
//         using namespace httplib;

//         Server svr;

//         svr.Get(R"(/numbers/(\d+))", [&](const Request &req, Response &res)
//                 {
//                 auto numbers = req.matches[1];
//                 res.set_content(numbers, "text/plain");
//             });

//         svr.Get("/stop", [&](const Request &req, Response &res)
//                 { svr.stop(); });

//         std::cout << "Server started at localhost:6000" << std::endl;
//         svr.listen("localhost", 8080);
// }

void initializeHandler(const httplib::Request &req, httplib::Response &res, Trie& trie, BiTrigramModel& trigramModel, std::unordered_map<std::string, int>& freqMap) {
    auto username = req.get_param_value("username");
    if (!username.empty()) {
        initialize(username, trie, trigramModel, freqMap);
        res.set_content("Data structures initialized", "text/plain");
    } else {
        res.status = 400; // Bad Request
        res.set_content("Missing username parameter", "text/plain");
    }
}

int main(void)
{
    using namespace httplib;

    Server svr;

    Trie trie;
    BiTrigramModel trigramModel;
    std::unordered_map<std::string, int> freqMap;

    // initialize("test", trie, trigramModel, freqMap);

    // dummy tester route
    svr.Get("/test", [&](const Request &req, Response &res)
    {
        res.set_content("Hello World!", "text/plain");
    });

    // Route to initialize the data structures
    svr.Get("/initialize", [&](const Request &req, Response &res) {
        auto username = req.get_param_value("username");
        if (!username.empty()) {
            initialize(username, trie, trigramModel, freqMap);
            res.set_content("Data structures initialized", "text/plain");
        } else {
            res.status = 400; // Bad Request
            res.set_content("Missing username parameter", "text/plain");
        }

        // Set CORS headers
        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
    });

    // Route to update the data structures, words are taken from body
    svr.Post("/update", [&](const Request &req, Response &res) {
        // Allow requests from any origin
        res.set_header("Access-Control-Allow-Origin", "*");
        // Allow the Content-Type header
        res.set_header("Access-Control-Allow-Headers", "Content-Type");

        auto username = req.get_param_value("username");
        if (!username.empty()) {
            std::vector<std::string> words;
            std::istringstream iss(req.body);
            std::string word;
            while (iss >> word) {
                words.push_back(word);
            }
            if (update(username, words)) {
                res.set_content("Data structures updated", "text/plain");
            } else {
                res.status = 500; // Internal Server Error
                res.set_content("Failed to update data structures", "text/plain");
            }
        } else {
            res.status = 400; // Bad Request
            res.set_content("Missing username parameter", "text/plain");
        }
    });

    // Route to get the next word suggestions
    svr.Get("/nextWordSuggestions", [&](const Request &req, Response &res) {
        auto lastWord = req.get_param_value("lastWord");
        auto currentWord = req.get_param_value("currentWord");
        if (!lastWord.empty() && !currentWord.empty()) {
            auto nextWords = getNextWordSuggestions(lastWord, currentWord, trigramModel);
            std::string suggestions;
            for (const auto& w : nextWords) {
                suggestions += w + " ";
            }
            res.set_content(suggestions, "text/plain");
        } else {
            res.status = 400; // Bad Request
            res.set_content("Missing lastWord or currentWord parameter", "text/plain");
        }

        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
    });

    // Route to get the auto-completion suggestions
    svr.Get("/autoCompletionSuggestions", [&](const Request &req, Response &res) {
        auto currentWord = req.get_param_value("currentWord");
        if (!currentWord.empty()) {
            auto suggestions = getAutoCompletionSuggestions(currentWord, trie, freqMap);

            std::string suggestionsStr;
            for (const auto& s : suggestions) {
                suggestionsStr += s + " ";
            }
            res.set_content(suggestionsStr, "text/plain");
        } else {
            res.status = 400; // Bad Request
            res.set_content("Missing currentWord parameter", "text/plain");
        }

        res.set_header("Access-Control-Allow-Origin", "*");
        res.set_header("Access-Control-Allow-Methods", "GET, POST");
        res.set_header("Access-Control-Allow-Headers", "Content-Type");
    });


    // Route to stop the server
    svr.Get("/stop", [&](const Request &req, Response &res)
    {
        svr.stop();
    });

    std::cout << "Server started at localhost:8080" << std::endl;
    svr.listen("localhost", 8080);

    return 0;
}
