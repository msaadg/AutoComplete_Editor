#include "BiTrigramModel.h"
#include <vector>

BiTrigramModel::BiTrigramModel() {}

void BiTrigramModel::insert(const std::string& first, const std::string& second, const std::string& third) {
    trigrams[first][second][third]++;
    bigrams[second][third]++;
}

// std::vector<std::string> TrigramModel::predictNextWord(const std::string& first, const std::string& second) {
//     std::vector<std::pair<std::string, int>> possibleWords;
//     for (auto& pair : trigrams[first][second]) {
//         possibleWords.push_back({pair.first, pair.second});
//     }
//     sort(possibleWords.begin(), possibleWords.end(), [](const auto& a, const auto& b) {
//         return a.second > b.second;
//     });

//     std::vector<std::string> predictions;
//     for (auto& pair : possibleWords) {
//         predictions.push_back(pair.first);
//     }
//     return predictions;
// }

std::vector<std::string> BiTrigramModel::predictNextWord(const std::string& secondLast, const std::string& last) {
    std::vector<std::pair<std::string, int>> possibleWordsTrigram;
    for (auto& pair : trigrams[secondLast][last]) {
        possibleWordsTrigram.push_back({pair.first, pair.second});
    }

    std::vector<std::pair<std::string, int>> possibleWordsBigram;
    for (auto& pair : bigrams[last]) {
        possibleWordsBigram.push_back({pair.first, pair.second});
    }

    // Combine predictions from both models
    std::vector<std::pair<std::string, int>> combinedWords;
    combinedWords.insert(combinedWords.end(), possibleWordsTrigram.begin(), possibleWordsTrigram.end());
    combinedWords.insert(combinedWords.end(), possibleWordsBigram.begin(), possibleWordsBigram.end());

    // Sort the combined predictions by frequency
    std::sort(combinedWords.begin(), combinedWords.end(), [](const auto& a, const auto& b) {
        return a.second > b.second;
    });

    // Extract only the predicted words
    std::vector<std::string> predictions;
    for (auto& pair : combinedWords) {
        predictions.push_back(pair.first);
    }
    return predictions;
}
