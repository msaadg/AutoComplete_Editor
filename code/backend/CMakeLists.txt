cmake_minimum_required(VERSION 3.0)
project(MyProject)

# Set C++ standard to C++17
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

# Add source files
set(SOURCES
    main.cpp
    Trie.cpp
    BiTrigramModel.cpp
    BigramModel.cpp
)

# Add header files
set(HEADERS
    Trie.h
    BiTrigramModel.h
    BigramModel.h
)

# Add executable target
add_executable(myprogram ${SOURCES} ${HEADERS})

set(httplib_DIR "/Users/muhammadsaad/vcpkg/packages/cpp-httplib_arm64-osx/share/httplib")
set(unofficial-brotli_DIR "/Users/muhammadsaad/vcpkg/packages/brotli_arm64-osx/share/unofficial-brotli")

# Find and link httplib library
find_package(httplib CONFIG REQUIRED)
target_link_libraries(myprogram PRIVATE httplib::httplib)
