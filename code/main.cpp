// Both trigram and bigram being used
#include <iostream>
#include <fstream>
#include <sstream>
#include <filesystem>
#include "Trie.h"
#include "BiTrigramModel.h"
#include <unordered_map>

namespace fs = std::filesystem;

// void processFile(const std::string& filePath, Trie& trie, BiTrigramModel& trigramModel) {
//     std::ifstream file(filePath);
//     std::string word, lastWord, secondLastWord;
//     if (file.is_open()) {
//         std::string line;
//         while (getline(file, line)) {
//             std::istringstream iss(line);
//             lastWord.clear();
//             secondLastWord.clear();
//             while (iss >> word) {
//                 trie.insert(word);
//                 if (!secondLastWord.empty() && !lastWord.empty()) {
//                     trigramModel.insert(secondLastWord, lastWord, word);
//                 }
//                 secondLastWord = lastWord;
//                 lastWord = word;
//             }
//         }
//         file.close();
//     } else {
//         std::cerr << "Failed to open the file: " << filePath << std::endl;
//     }
// }

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

void initializeDS(const std::string& username, Trie& trie, BiTrigramModel& trigramModel, std::unordered_map<std::string, int>& freqMap) {
    std::string userFilePath = "users/" + username + ".txt";
    std::ofstream userFile(userFilePath, std::ios::app);
    userFile.close();

    // process all the txt files in the input folder
    const std::string folderPath = "input";
    for (const auto& entry : fs::directory_iterator(folderPath)) {
        if (entry.is_regular_file() && entry.path().extension() == ".txt") {
            processFile(entry.path(), trie, trigramModel, freqMap);
        }
    }

    // process the username.txt file
    processFile(userFilePath, trie, trigramModel, freqMap);
}

void initialize(const std::string& username) {
    Trie trie;
    BiTrigramModel trigramModel;
    std::unordered_map<std::string, int> freqMap;
    initializeDS(username, trie, trigramModel, freqMap);
}

bool update (const std::string& username, const std::vector<std::string>& words) {
    std::string userFilePath = "users/" + username + ".txt";
    std::ofstream userFile(userFilePath, std::ios::app);
    if (!userFile.is_open()) {
        std::cerr << "Failed to open the file: " << userFilePath << std::endl;
        return false;
    }

    // add each word 10 times to the user file
    for (const auto& word : words) {
        for (int i = 0; i < 10; i++) {
            userFile << word << " ";
        }
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
}

int main() {
    Trie trie;
    BiTrigramModel trigramModel;

    // std::string input, currentWord, lastWord;
    // std::cout << "Type something: ";

    // // Read input line by line
    // while (std::getline(std::cin, input)) {
    //     std::istringstream iss(input);
    //     std::string word;
    //     while (iss >> word) {
    //         lastWord = currentWord;
    //         currentWord = word;
    //     }

    //     // Show auto-completion for the last (possibly incomplete) word
    //     auto suggestions = trie.autocomplete(currentWord);
    //     std::cout << "Suggestions for '" << currentWord << "': ";
    //     if (!suggestions.empty()) {
    //         for (const auto& s : suggestions) {
    //             std::cout << s << " ";
    //         }
    //     } else {
    //         std::cout << "no suggestions";
    //     }
    //     std::cout << std::endl;

    //     // Predict the next word based on the last two complete words
    //     auto nextWords = trigramModel.predictNextWord(lastWord, currentWord);
    //     std::cout << "Next word predictions: ";
    //     if (!nextWords.empty()) {
    //         for (const auto& w : nextWords) {
    //             std::cout << w << " ";
    //         }
    //     } else {
    //         std::cout << "no predictions";
    //     }
    //     std::cout << std::endl;

    //     std::cout << "Type something: ";
    // }

    return 0;
}