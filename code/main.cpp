// Only bigram being used

// #include <iostream>
// #include <fstream>
// #include <sstream>
// #include <filesystem>
// #include "Trie.h"
// #include "BigramModel.h"

// namespace fs = std::filesystem;

// void processFile(const std::string& filePath, Trie& trie, BigramModel& bigramModel) {
//     std::ifstream file(filePath);
//     std::string word, lastWord;
//     if (file.is_open()) {
//         std::string line;
//         while (getline(file, line)) {
//             std::istringstream iss(line);
//             lastWord.clear();
//             while (iss >> word) {
//                 trie.insert(word);
//                 if (!lastWord.empty()) {
//                     bigramModel.insert(lastWord, word);
//                 }
//                 lastWord = word;
//             }
//         }
//         file.close();
//     } else {
//         std::cerr << "Failed to open the file: " << filePath << std::endl;
//     }
// }

// int main() {
//     Trie trie;
//     BigramModel bigramModel;

//     // Process all .txt files in the folder
//     const std::string folderPath = "input";
//     for (const auto& entry : fs::directory_iterator(folderPath)) {
//         if (entry.is_regular_file() && entry.path().extension() == ".txt") {
//             processFile(entry.path(), trie, bigramModel);
//         }
//     }

//     std::string input, currentWord;
//     std::cout << "Type something: ";

//     // Read input line by line
//     while (std::getline(std::cin, input)) {
//         std::istringstream iss(input);
//         std::string word;
//         while (iss >> word) {
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
        
//         // Predict the next word based on the last complete word
//         auto nextWords = bigramModel.predictNextWord(currentWord);
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


// Both trigram and bigram being used
#include <iostream>
#include <fstream>
#include <sstream>
#include <filesystem>
#include "Trie.h"
#include "BiTrigramModel.h"

namespace fs = std::filesystem;

void processFile(const std::string& filePath, Trie& trie, BiTrigramModel& trigramModel) {
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

int main() {
    Trie trie;
    BiTrigramModel trigramModel;

    // Process all .txt files in the folder
    const std::string folderPath = "input";
    for (const auto& entry : fs::directory_iterator(folderPath)) {
        if (entry.is_regular_file() && entry.path().extension() == ".txt") {
            processFile(entry.path(), trie, trigramModel);
        }
    }

    std::string input, currentWord, lastWord;
    std::cout << "Type something: ";

    // Read input line by line
    while (std::getline(std::cin, input)) {
        std::istringstream iss(input);
        std::string word;
        while (iss >> word) {
            lastWord = currentWord;
            currentWord = word;
        }

        // Show auto-completion for the last (possibly incomplete) word
        auto suggestions = trie.autocomplete(currentWord);
        std::cout << "Suggestions for '" << currentWord << "': ";
        if (!suggestions.empty()) {
            for (const auto& s : suggestions) {
                std::cout << s << " ";
            }
        } else {
            std::cout << "no suggestions";
        }
        std::cout << std::endl;

        // Predict the next word based on the last two complete words
        auto nextWords = trigramModel.predictNextWord(lastWord, currentWord);
        std::cout << "Next word predictions: ";
        if (!nextWords.empty()) {
            for (const auto& w : nextWords) {
                std::cout << w << " ";
            }
        } else {
            std::cout << "no predictions";
        }
        std::cout << std::endl;

        std::cout << "Type something: ";
    }

    return 0;
}