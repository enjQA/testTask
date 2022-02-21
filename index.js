import * as fs from 'fs';

fs.readFile('./taskMountainMikes.side', 'utf8', (error, mountainMikes) => {
    if (error) {
        console.log("Reading file error:", error)
        return;
    }
    try {
        function writeToTheFile() {
            fs.writeFileSync("./taskMountainMikes.side", JSON.stringify(data, null, 2))
        }
        const data = JSON.parse(mountainMikes)
        switch(parseInt(data.id.charAt(35))) {
            case 0:
                data.id = data.id.replace(/.$/, 1)
                writeToTheFile()
                break;
            case 1:
                data.id = data.id.replace(/.$/, 2)
                writeToTheFile()
                break;
            case 2:
                data.id = data.id.replace(/.$/, 3)
                writeToTheFile()
                break;
            case 3:
                data.id = data.id.replace(/.$/, 4)
                writeToTheFile()
                break;
            case 4:
                data.id = data.id.replace(/.$/, 5)
                writeToTheFile()
                break;
            case 5:
                data.id = data.id.replace(/.$/, 6)
                writeToTheFile()
                break;
            case 6:
                data.id = data.id.replace(/.$/, 7)
                writeToTheFile()
                break;
            case 7:
                data.id = data.id.replace(/.$/, 8)
                writeToTheFile()
                break;
            case 8:
                data.id = data.id.replace(/.$/, 9)
                writeToTheFile()
                break;
            case 9:
                data.id = data.id.replace(/.$/, 0)
                writeToTheFile()
                break;
            default:
                console.log()
                break;
        }
        for(let i = 0; i < data.tests.length; i++) {
            data.tests[i].id
            switch(parseInt(data.tests[i].id.charAt(35))) {
                case 0:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 1)
                    writeToTheFile()
                    break;
                case 1:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 2)
                    writeToTheFile()
                    break;
                case 2:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 3)
                    writeToTheFile()
                    break;
                case 3:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 4)
                    writeToTheFile()
                    break;
                case 4:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 5)
                    writeToTheFile()
                    break;
                case 5:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 6)
                    writeToTheFile()
                    break;
                case 6:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 7)
                    writeToTheFile()
                    break;
                case 7:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 8)
                    writeToTheFile()
                    break;
                case 8:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 9)
                    writeToTheFile()
                    break;
                case 9:
                    data.tests[i].id = data.tests[i].id.replace(/.$/, 0)
                    writeToTheFile()
                    break;
                default:
                    break;
            }

        }
        for(let i = 0; i < data.tests.length; i++) {
            for(let b = 0; b < data.tests[i].commands.length; b++) {
            switch(parseInt(data.tests[i].commands[b].id.charAt(35))) {
                case 0:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 1)
                    writeToTheFile()
                    break;
                case 1:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 2)
                    writeToTheFile()
                    break;
                case 2:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 3)
                    writeToTheFile()
                    break;
                case 3:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 4)
                    writeToTheFile()
                    break;
                case 4:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 5)
                    writeToTheFile()
                    break;
                case 5:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 6)
                    writeToTheFile()
                    break;
                case 6:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 7)
                    writeToTheFile()
                    break;
                case 7:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 8)
                    writeToTheFile()
                    break;
                case 8:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 9)
                    writeToTheFile()
                    break;
                case 9:
                    data.tests[i].commands[b].id = data.tests[i].commands[b].id.replace(/.$/, 0)
                    writeToTheFile()
                    break;
                default:
                    break;
                }
            }
        }
    } catch (error) {
        console.log('error')
    }
})
