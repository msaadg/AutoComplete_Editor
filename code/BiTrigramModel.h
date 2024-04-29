#include <unordered_map>
#include <string>
#include <vector>

class BiTrigramModel {
private:
    std::unordered_map<std::string, std::unordered_map<std::string, std::unordered_map<std::string, int>>> trigrams;
    std::unordered_map<std::string, std::unordered_map<std::string, int>> bigrams;
public:
    BiTrigramModel();
    void insert(const std::string& first, const std::string& second, const std::string& third);
    std::vector<std::string> predictNextWord(const std::string& first, const std::string& second);
};