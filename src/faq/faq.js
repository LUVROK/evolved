import React from 'react';
import "./faq.css";
import Faq from 'react-faq-component';
const Faq_contaINER = () => {
    const data = {
        title: "",
        rows: [
        {
            title: "Who are YOU?",
            content: "We're Knightdom - a team of Game developers. We are relatively new to the NFT market, but we have already shown our level of achievement."
        },
        {
            title: "Why should I choose you?",
            content: "We saw the market and found out that we have the best and strongest product. We are better than 99% of what the Solana NFT market currently offers. Although we have not been long in the NFT world, we already sold out our main collection Knightdom: Origin with a supply of 12345 nft and we continue to work on the universe. We've already announced a new Knightdom: Evolved collection. Read below. "
        },
        { title: "What's your experience?",
            content: "Our team is growing rapidly right now, and each member brings us his own experience. Our team has worked on STALKER 2, METRO EXODUS, WORLD OF TANKS, CROSSOUT, GWENT, JUST CAUSE 3, and other large-scale projects. It's through our experience that we can afford to deliver such a great level of detail in a better way than others. It's our dedication and hard work that make us successful." },
        { title: "What about your audience?",
            content: "We've faced a lot of challenges and made a lot of mistakes along the way. But despite it all, we never fell flat on our faces and we always learned from difficult situations. Communication with our audience is a key factor in our success. You all are the Knightdom family and you matter a lot. We always listen to you and we love you. \n" +
                "Thank you for being with us." },
        { title: "What does the future hold for Knightdom: Origin?",
            content: "Since Knightdom: Origin is our first collection, you should understand that it has historical value for the entire Knightdom universe. \n" +
                "Knightdom: Origin will be integrated into absolutely all future and current Knightdom universe projects. Even though we've been selling this collection for FREE MINT, our team is confident that a day will come where the floor price of the collection will exceed 0.5-1 Sol. If you grabbed your piece of the collection or are a whale, then I congratulate you, you made a very good bargain." },
        { title: "What is Knightdom: Evolved collection?",
            content: "After implementing our first Knightdom: Origin collection and being accepted by the community, we found out that to fully build the Knightdom universe and grow our community, we needed to move to another level with Knightdom: Evolved collection.\n" +
                "When it comes to drawing and materials It's a whole new level of quality, the best detail the world NFT's community has not yet seen. Our team agrees 100% that this collection will allow us to make everything we mentioned earlier. Here is the collection that will turn the whole NFT market upside down and lead us to make a name for ourselves in the cryptocurrency world. \n" +
                "New knights, like the old ones, will have the same universe and will be directly connected. \n" +
                "Unique-edged weapons, the latest armor, helmets, firearms all this the NFT market bundled has never seen at such a high level !" },
        { title: "A burning system? What is it?",
            content: "To reduce the price of our past collection, we allow you to get into a white list where the price of mint will be at a 70% discount. To get the discount you will need to burn knights from the Knightdom: Origin collection and apply to us. \n" +
                "More information about the burning process in Discord. Amount - 3 The Knightdom: Origin knights for 1 Evolved." },
        { title: "What will be the Mint's price?",
            content: "Burning Whitelist Mint: 0.2 Sol ┃ "+
                "First Whitelist (500 sets) Mint: 0.5 Sol ┃ " +
                "Common Mint: 0.77 Sol" },
        { title: "What is this game all about?",
            content: "We are happy to eventually announce our game to you all!\n" +
                "KNIGHTDOM GAME is a game that will be an advanced feature built on Unreal Engine 5. This is where you will finally be able to meet all the Knightdom members and test your skills in action. The game will allow its participants to integrate all the collections of the Knightdom universe and conduct team and spectacular battles directly online. You'll be able to create your own clans, find friends and implement all your tactical ideas directly in the game. Then Unreal Engine 5 game engine will allow you to feel the outstanding level of graphics and get a good 360 degrees look at your knights. We're also working on a full-fledged port to the metaverse, however, more information on that will come later. " },
        { title: "How will the rarity of my NFTs affect gameplay?",
            content: "You should understand that all rarity of your knight's attributes will affect their characteristics in the game. \n" +
                "That is, the rarer your NFT is, the stronger your knight will be in the game. Your armor's toughness, impact strength, marksmanship, movement speed, and defense effectiveness all directly depend on the rarity of your NFT attributes." },
        { title: "When is the game coming?",
            content: "Since game development is a very long time-consuming and resource-intensive process, we expect to make a full announcement in Q2 2022. \n" +
                "You should also understand that the future of this project directly depends on the development of the Knightdom universe. Don't forget to help us and talk about us to those who don't know about us yet. " },
        { title: "What is KNIGHTDOM COIN?",
            content: "We are happy to inform you that we cannot do without our own Coin for our infrastructure. It will allow you to interact directly with other community members in the game and protect you from the commissions of the exchangers. \n" +
                "Now, this project is under discussion and its future directly depends on the scale of the Knightdom universe." },
        { title: "When will the Knightdom: Evolved MINT be?",
                content: "March 4-5, 2022" },

    ]};
    return (<div className="faq zindex">
                <div className="team__wrap">
                    <div className="team_h1">
                        FAQ’S
                    </div>
                    <div className="team__container">
                        <Faq data={data}
                             styles={{
                            bgColor: "#48484A00",
                            titleTextColor: "#ffffff",
                            rowTitleColor: "#ffffff",
                            rowTitleTextSize: 'large',
                            rowContentColor: "#ffffff",
                            rowContentTextSize: '16px',
                            rowContentPaddingTop: '10px',
                            rowContentPaddingBottom: '10px',
                            rowContentPaddingLeft: '50px',
                            rowContentPaddingRight: '150px',
                            arrowColor: "white",
                        }}
                             config={{
                                 arrowIcon: "+",
                             }}/>
                    </div>
                </div>
            </div>
        )
    };

export default Faq_contaINER;
