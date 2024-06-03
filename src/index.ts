import fs from 'fs';

async function start(frontend: boolean) {
    if (frontend == true) {
        await startFrontend().catch((err) => {
            console.error(err);
            console.log('Error when starting frontend. Won\'t start frontend.');
            });
        };
    await startBackend().catch((err) => {
        console.error(err);
        console.log('Error when starting backend. Stopping frontend as backend is a dependency.');
        stopFrontend();
    };

const checkRootFile = () => {
    const rootFilePath = './.root';
    try {
        fs.accessSync(rootFilePath, fs.constants.F_OK);
        console.log('[OK] | Starting')
        // start the backend
        // startBackend();
        // check if frontend is in use
        // if (config.frontend == True) {
        //     await startFrontend();
        // }
        // if yes, start frontend
        // 
        // else, wait for ack from backend
    } catch (err) {
        console.warn('Root file not found, starting setup.');
        const setupMenu = () => {
            const menuOptions = [
                '1: Lightweight Setup',
                '2: Frontend Setup',
                '3: Full Setup',
                '4: Exit'
            ];
            let selectedOption = 0;

            const printMenu = () => {
                console.clear();
                console.log('Select the setup you would like to have:');
                menuOptions.forEach((option, index) => {
                    if (index === selectedOption) {
                        console.log(`> ${option}`);
                    } else {
                        console.log(`  ${option}`);
                    }
                });
            };

            const handleKeyPress = (key: string) => {
                if (key === 'ArrowUp' && selectedOption > 0) {
                    selectedOption--;
                } else if (key === 'ArrowDown' && selectedOption < menuOptions.length - 1) {
                    selectedOption++;
                } else if (key === 'Enter') {
                    switch (selectedOption) {
                        case 0:
                            // Handle basic setup
                            console.log('Performing lightweight setup...');
                            break;
                        case 1:
                            // Handle frontend setup
                            console.log('Performing frontend setup...');
                            break;
                        case 2:
                            // Handle full setup
                            console.log('Performing full setup...');
                            break;
                        case 3:
                            // Exit the program
                            console.log('Exiting...');
                            process.exit(0);
                            break;
                    }
                }

                printMenu();
            };

            printMenu();

            process.stdin.setRawMode(true);
            process.stdin.resume();
            process.stdin.setEncoding('utf-8');
            process.stdin.on('data', (key) => {
                handleKeyPress(key);
            });
        };

        setupMenu();
        // Start setup here
    }
};

checkRootFile();