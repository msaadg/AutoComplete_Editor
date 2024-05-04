#include <vector>
#include <string>

class TrieNode {
public:
    std::vector<TrieNode*> children;
    bool isEndOfWord;

    TrieNode();
    ~TrieNode();
};

class Trie {
private:
    TrieNode* root;
public:
    Trie();
    ~Trie();
    void insert(const std::string& word);
    std::vector<std::string> autocomplete(const std::string& prefix);
    void collectAllWords(TrieNode* node, std::string currentPrefix, std::vector<std::string>& results);
    void deleteTrie(TrieNode* node);
};