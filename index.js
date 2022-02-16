const TelegramApi = require('node-telegram-bot-api')

const token = '5198162776:AAFjapXeyhSCMMqYTVfTpyUnDIN-4wXKhHk'

const bot = new TelegramApi(token, {polling: true})



const start = () =>{

    bot.setMyCommands([
        {command: '/start', description: 'Welcoming message'},
        {command: '/introduction', description: 'Introduction'},
        {command: '/web1' , description: 'Web 1.0 (1989-2005)'},
        {command: '/web2' , description: 'Web 2.0 (2005-present)'},
        {command: '/web3' , description: 'Web 3.0 (yet to come)'},
        {command: '/web3crypto' , description: 'Web 3.0 and cryptocurrency'},
        {command: '/web3benefits' , description: 'Benefits'},
        {command: '/dapps' , description: 'What are dapps'},
        {command: '/dao' , description: 'What are DAOs'},
        {command: '/defi' , description: 'What is defi'},
        {command: '/dex' , description: 'What are decentralized exchanges'},
        {command: '/lendingandborrowing' , description: 'lending/borrowing'},
        {command: '/nfts' , description: 'What are nfts'}
    ])

    bot.on('message', async msg => {

        const text = msg.text;
        const chatId = msg.chat.id;

        if (text === '/start'){
            await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/667/076/66707684-3a82-396b-aadd-1b2c6d3e4a5c/5.webp')
            await bot.sendMessage(chatId, 'Welcome!')
            await bot.sendMessage(chatId, `Here is the list of every command:`)
            return bot.sendMessage(chatId, `
/introduction - quick introduction 
/web1 - Web 1.0 (1989-2005)
/web2 - Web 2.0 (2005-present)
/web3 - Web 3.0 (yet to come)
/web3crypto - web 3.0 and cryptocurrency
/web3benefits - benefits of web 3.0 over web 2.0
/dapps - what are dapps
/dao - what are DAOs
/defi - what is defi
/dex - what are decentralized exchanges
/nfts - what are nft's
            
            
            `)
        }

        if(text === '/introduction'){
             return bot.sendMessage(chatId, `This bot can give you some information on what is web 3.0 and why it's better than web 2.0 and also the little history of web 1.0 and web 2.0. `)
        }

        if(text === '/web1'){
            await bot.sendPhoto(chatId, './images/web1.png')
            await bot.sendMessage(chatId, `Web1 (1980s - early 2000’s) The first phase of the Internet, Web1, was mainly about providing the everyday consumer with online content and information. `)
            await bot.sendMessage(chatId, `As consumers could only read information or content online,  and not yet interact with it, Web1 was incredibly static.`)
            return bot.sendMessage(chatId, `When you think about Web1, think Internet Explorer, Yahoo, or Netscape. While web1 was read-only, the companies we associate with web1 were built on open protocols (meaning pretty much any person or organization could build on the internet and know they were subject to the same rules as the next person or organization). 
`)

        }
        if(text === '/web2'){
            await bot.sendPhoto(chatId, './images/web2.png')
            await bot.sendMessage(chatId, `Thanks to developments in online technologies like Javascript, HTML5, CSS3, and others, the Social Web, or Web 2.0, made the internet a lot more dynamic, allowing companies to create interactive web platforms like YouTube, Facebook, Wikipedia, and others.`)
            await bot.sendMessage(chatId, `Because data can now be transmitted and shared between numerous platforms and applications, this cleared the way for both social networks and user-generated content production to thrive.`)
            await bot.sendMessage(chatId, `Along the way, the internet became largely dominated by the four behemoths we know today as Apple, Amazon, Facebook, and Google. Web2 also saw an explosion in the use of smartphones, and most of internet use was through mobile apps and hardware built by these companies. While this meant more people could participate in the internet, it also meant the internet was becoming increasingly controlled by the leading digital platforms. `)
            return bot.sendMessage(chatId, `Why is this a problem? In the centralized internet we know today, Apple can take a 30% cut on all paid-app downloads and in-app purchases, Twitter and Facebook can de-platform the POTUS, and the everyday consumer has less privacy, security, and control over their online information than ever before.`)
        }

        if(text === '/web3'){
            await bot.sendPhoto(chatId, './images/web3.png')
            await bot.sendMessage(chatId, `Web3 refers to decentralized apps that run on the blockchain. These are apps that allow anyone to participate without monetising their personal data.`)
            return bot.sendMessage(chatId, `Web3, the future internet we’re moving towards, is a decentralized internet. Under Web3, the internet is shared online and governed by the collective “we,” rather than owned by centralized entities.The Web3 world is one that has open-source protocols at its foundation. Web3 is about rearchitecting internet services and products so that they benefit people rather than entities.`)
        }

        if(text === '/web3crypto'){
            await bot.sendMessage(chatId, `When it comes to Web 3.0, you'll often hear the term "cryptocurrency" discussed. Because many Web 3.0 protocols rely significantly on cryptocurrency, this is the case. Instead, it gives everyone who wants to help establish, govern, contribute to, or enhance one of the projects a monetary incentive (tokens). Web 3.0 tokens are digital assets linked to the goal of establishing a decentralized Internet. These protocols could provide services like lending , borrowing , staking, storage, identity, hosting`)
            return bot.sendMessage(chatId, `Tokens are digital units of cryptocurrency, and on web3, developers and users share financial interests, allowing anyone to earn crypto. Users directly profit from their contributions, whether it's through creativity, play, engagement, or deposits.`)
        }

        if(text === '/web3benefits'){
            await bot.sendPhoto(chatId, './images/benefits.png')
            await bot.sendMessage(chatId, ` Anyone who is on the network has permission to use the service – or in other words, permission isn't required.`)

            await bot.sendMessage(chatId, `No one can block you or deny you access to the service.`)
            return bot.sendMessage(chatId, `
            
            PRACTICAL COMPARISONS
            
    Web 2
            
           Twitter can censor any account or tweet
           
           Payment service may decide to not allow payments for certain types of work
           
           Servers for gig-economy apps could go down and affect worker income
           
    Web 3
           
           Web3 tweets would be uncensorable because control is decentralized
           
           Web3 payment apps require no personal data and can't prevent payments
           
           Web3 servers can't go down – they use blockchain, a decentralized network of 1000s of computers as their backend
            `)
        }


        if(text === '/dapps'){
            await bot.sendPhoto(chatId, './images/dapps.png')
            await bot.sendMessage(chatId, `Decentralized applications (dApps) are digital applications or programs that exist and run on a blockchain , and are outside the purview and control of a single authority.`)
            return bot.sendMessage(chatId , `dApps are most commonly used for:
NFTs
DeFi
Gaming
Social
Exchanges
`)
        }

        if(text === '/dao'){
            await bot.sendPhoto(chatId, './images/dao.png')
            await bot.sendMessage(chatId, `DAOs are a powerful and secure method to collaborate with like-minded people all across the world.`)
            await bot.sendMessage(chatId, `Consider them an internet-native business that their members collectively own and govern. They have built-in treasuries to which no one can have access without the group's permission. Proposals and voting are used to make decisions, ensuring that everyone in the company gets a say.`)
            await bot.sendMessage(chatId, `There is no CEO who can spend money on their own whims, and no risk of a shady CFO tampering with the accounts. Everything is out in the open, and the DAO's spending restrictions are encoded into its code.`)
            await bot.sendMessage(chatId, `Why do we need DAOs?`)
            await bot.sendMessage(chatId, `DAOs are a great method to collaborate with like-minded people all across the world in a secure and efficient manner.`)
            await bot.sendMessage(chatId, `Consider them a member-owned and managed internet-native company. They have built-in treasuries that only the group may access. To ensure that everyone in the company has a say, proposals and voting are used to make decisions.`)
            return bot.sendMessage(chatId, `There is no CEO who can spend money on their own whims, and there is no risk of a shady CFO tampering with the accounts. Everything is in the open, and the DAO's code contains the rules for spending.`)

        }

        if(text === '/defi'){
            await bot.sendPhoto(chatId, './images/defi.png')
            await bot.sendMessage(chatId, `What exactly is Defi? Decentralized Finance is what it stands for. We have always used centralized finance , when the movement of money is controlled by a central authority. It is under the control of the government and the banks.`)
            await bot.sendMessage(chatId, `They can print more if they want to, block you from borrowing if you don't want to, and even prevent you from opening a bank account if they don't want you to. They have your money and could change it at any time if they wanted to, and you wouldn't be able to stop them. You might be able to, but how would you prove it? You gave them your money.`)
            await bot.sendMessage(chatId, `They can also limit what you can do if you run a business. For example, if you have a small magical tree business that may be medicinal, they may instruct you not to bring any money from the business to a bank, which means you won't be able to deposit, invest, or keep it secure.`)
            await bot.sendMessage(chatId, `Furthermore, traditional finance is highly costly. Payday loans can cost up to 500 percent of your value, credit cards can cost up to 25%, and personal loans can cost up to 18% of your value. These are enormous rates, but you pay them because that's what you've got.`)
            return bot.sendMessage(chatId, `Decentralized finance is an alternative in which there are no banks and instead pieces of code that run and behave as a bank. They are open to everyone, they don't require you to trust them (since they are essentially code running a program - you can read it and verify it won't scam you), they are censorship resistant, and they are significantly less expensive than traditional, centralized finance.`)


        }

        if(text === '/dex'){
            await bot.sendPhoto(chatId, './images/dex.png')
            await bot.sendMessage(chatId, `The majority of successful decentralized exchanges, or Dexes, work by pooling investors' funds and then allowing traders to trade that money. The fee for each trade goes to the investors.  It's also written in code, which means it can't be changed. A government cannot just say, "You can no longer acquire bitcoin." The fees are also locked, ensuring that they do not change and reach absurdly high rates such as 15%.`)
            return  bot.sendMessage(chatId, `Decentralized Exchanges introduce a whole new realm of tokens and coins to the public. For example, you may only buy and sell 32 cryptocurrencies on Coinbase, the first centralized exchange to become public. They carefully examine each penny before adding it because they are governed by the government and must adhere to certain standards. Uniswap, the most popular decentralized exchange, has hundreds of tokens to trade, and it is completely unregulated. That is the decentralized element; there are billions of dollars tied up in these liquidity pools so traders can trade, but nobody has power over these billions of dollars... they are simply executing a software written by someone. In fact, only investors may withdraw their funds from the pool, but loan rates would then rise, attracting new investors. Because code cannot be modified and is immutable, we like to say in the crypto world that "code is the law." Uniswap is one of the most important Ethereum exchanges, with billions of dollars in its pools. PancakeSwap is another Binance Smart Chain network exchange with a few billion dollars in liquidity.`)
        }

        if(text === '/lendingandborrowing'){
            await bot.sendPhoto(chatId, './images/landb.png')
            await bot.sendMessage(chatId, `Lending and borrowing are another crucial pillar of defi. Indeed, lending and borrowing money makes up a large portion of our current financial condition, thus it seems sense that the blockchain could do it better.`)
            await bot.sendMessage(chatId, `One of the reasons we can rely on banks to lend and borrow is that if we put down 20% as a down payment and never pay the loan back in full, our government can pursue us and put us in jail. In other words, not repaying a loan has legal ramifications.`)
            await bot.sendMessage(chatId, `This is a problem with crypto because anonymity is one of its benefits. You may put down 20% and then disappear with the remainder of the loan, never to be seen again. We must find a solution to this problem. In reality, we can utilize smart contracts to allow others to spend our funds while yet maintaining control over them.`)
            await bot.sendMessage(chatId, `Person A wants to earn interest on his coins, whereas Person B wants to borrow some coins, as an example. So Person A deposits his coins into a smart contract on Compound or Aave, two sites that allow crypto borrowing and lending. Smart Contracts are simply code that performs a specific function. In exchange, he receives CTokens, or ATokens, which are replicas of his original coin, plus interest. He simply enters his ATokens or CTokens into the smart contract and they spit out his initial amount plus interest whenever he wishes. The smart contract is designed in this way so that no human is required to perform the calculations or complete the transaction. Everything is automated and controlled by code. So that takes care of Person A's desire to earn interest through traditional lending.`)
            return bot.sendMessage(chatId, `Person B must perform something called overcollateralize his debt during the borrowing phase. This means that if he wants to borrow $100, he will have to put up $120 as collateral. So, if someone flees and never repays his debt, the smart contract is constructed in such a way that person A can get their money back plus interest.`)
        }

        if(text === '/nfts'){
            await bot.sendPhoto(chatId, './images/ckitty.png')
            await bot.sendMessage(chatId, 'NFTs are digital assets that can take the form of art, GIFs, music, short videos, or even your profile picture. What makes NFTs unique is that they are stored on a blockchain (a publicly available digital database) that stores proof of ownership.')
            await bot.sendMessage(chatId, 'So, what exactly are NFTs?')
            return  bot.sendMessage(chatId, `NFTs, in their most basic form, convert digital works of art and other valuables into one-of-a-kind, verifiable assets that are simple to trade on the blockchain. the payback has been enormous for many artists, singers, influencers, and others, with investors paying a lot of money for NFT copies of digital images. For example, a decade-old "Nyan Cat" GIF sold for $600,000.`)

        }
      


        return bot.sendMessage(chatId, 'Sorry , I dont understand, try again!')

    })
}

start();