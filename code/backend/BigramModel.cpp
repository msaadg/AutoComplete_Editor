#include "BigramModel.h"
#include <vector>

BigramModel::BigramModel() {}

void BigramModel::insert(const std::string& first, const std::string& second) {
    bigrams[first][second]++;
}

std::vector<std::string> BigramModel::predictNextWord(const std::string& first) {
    std::vector<std::pair<std::string, int>> possibleWords;
    for (auto& pair : bigrams[first]) {
        possibleWords.push_back({pair.first, pair.second});
    }
    sort(possibleWords.begin(), possibleWords.end(), [](const auto& a, const auto& b) {
        return a.second > b.second;
    });

    std::vector<std::string> predictions;
    for (auto& pair : possibleWords) {
        predictions.push_back(pair.first);
    }
    return predictions;
}