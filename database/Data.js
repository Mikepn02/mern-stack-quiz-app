const Questions = [
{
    id:1,
    question: "Which of the following is true about Node.JS?",
    options: [
        "Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine",
        "Node.JS is used to delevop I/O intensive web applications like video streaming sites, single page applications and other web application.",
        "Node.js is open source and is completely free to use.",
        "All above"
    ]
},
{
    id:2,
    question: "Which method of fs module is used to get information about file?",
    options: [
        "fs.open(path, flags[, mode], callback)",
        "fs.stat(path, callback)",
        "fs.readFile(path, flags[, mode], callback)",
        "- None of the above"
    ]
},
{
    id:3,
    question: "Which of the following code print the platform of operating system?",
    options: [
        "console.log('platform : ' + os.platform)",
        "console.log('platform : ' + os.platform())",
        "console.log('platform : ' + os.getPlatform())",
        "None of the above."
    ]
},
{
    id:4,
    question: "In which of the following areas, Node.js is perfect to use? ",
    options: [
        "I/O bound Applications",
        "Data Streaming Application",
        "Data Intensive Realtime Applications (DIRT)",
        "All of the above."
    ]
},
{
    id:5,
    question: "Which of the following module is required for path specific operations?",
    options: [
        "os module",
        "fs module",
        "path module",
        "none of above."
    ]
}
]
const answers = [3,1,1,3,2]

module.exports = {Questions,answers}