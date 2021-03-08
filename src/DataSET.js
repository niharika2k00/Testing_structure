
// images
import Card1ruby from './Images/ruby.jfif';
import Card2py from './Images/py.jfif';
import Card3java from './Images/java.jfif';
import Card4spring from './Images/spring.png';




var Data_textSET = null;

if (Data_textSET === null) {
    Data_textSET = {
        Main: {              // OBJECT OF OBJECTS

            Navbar: {
                heading: "TOPIC_HEAD",
                head_items: [
                    {
                        name: "HOME",
                        link: "/"
                    },

                    {
                        name: "CONTENT",
                        link: ""
                    },

                    {
                        name: "ENDING",
                        link: ""
                    }
                ],
            },


            Cards: {
                heading: "<----**   PROGRAMMING_LANGUAGES   ----**>",

                card_item: [
                    {
                        id: "0",
                        image: Card1ruby,
                        title: "RUBY",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard e the 1500s, when specimen book. "
                    },

                    {
                        id: "1",
                        image: Card2py,
                        title: "PYTHON",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard e the 1500s, when specimen book. "
                    },

                    {
                        id: "2",
                        image: Card3java,
                        title: "JAVA",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard e the 1500s, when specimen book. "
                    },

                    {
                        id: "3",
                        image: Card4spring,
                        title: "SPRING",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard e the 1500s, when specimen book. "
                    },

                    {
                        id: "4",
                        image: Card1ruby,
                        title: "RUBY",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard e the 1500s, when specimen book. "
                    },

                    {
                        id: "5",
                        image: Card2py,
                        title: "PYTHON",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard e the 1500s, when specimen book. "
                    },

                    {
                        id: "6",
                        image: Card3java,
                        title: "JAVA",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard e the 1500s, when specimen book. "
                    },

                    {
                        id: "7",
                        image: Card4spring,
                        title: "SPRING",
                        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard e the 1500s, when specimen book. "
                    },
                ]

            },


            Content:
            {
                heading: "<----**   LANGUAGES_HISTORY   ----**>",
                history: "C++ (/ˌsiːˌplʌsˈplʌs/) is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, orThe language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.C++ was designed with an orientation toward system programming and embedded, resource-constrained software and large systems, with performance, efficiency, and flexibility of use as its design highlights.[10] C++ has also been found useful in many other contexts, with key strengths being software infrastructure and resource-constrained applications,[10] including desktop applications, video games, servers (e.g. e-commerce, web search, or SQL servers), and performance-critical applications (e.g. telephone switches or space probes). C++ is standardized by the International Organization for Standardization (ISO), with the latest standard version ratified and published by ISO in December 2020 as ISO/IEC 14882:2020 (informally known as C++20).[12] The C++ programming language was initially standardized in 1998 as ISO/IEC 14882:1998, which was then amended by the C++03, C++11, C++14, and C++17 standards. The current C++20 standard supersedes these with new features and an enlarged standard library. Before the initial standardization in 1998, C++ was developed by Danish computer scientist Bjarne Stroustrup at Bell Labs since 1979 as an extension of the C language; he wanted an efficient and flexible language similar to C that also provided high-level features for program organization.[13] Since 2012, C++ is on a three-year release schedule,[14] with C++23 the next planned standard." 
            }






        }
    }
};


export default Data_textSET;