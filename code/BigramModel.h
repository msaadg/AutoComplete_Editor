#include <unordered_map>
#include <string>
#include <vector>

class BigramModel {
private:
    std::unordered_map<std::string, std::unordered_map<std::string, int>> bigrams;
public:
    BigramModel();
    void insert(const std::string& first, const std::string& second);
    std::vector<std::string> predictNextWord(const std::string& first);
};
