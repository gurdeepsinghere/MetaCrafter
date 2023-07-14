// Create a variable to hold the number of NFTs
let totalNFTs = 0;

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, description, artist) {
  const nft = {
    name: name,
    description: description,
    artist: artist
  };

  totalNFTs++; // Increment the total number of NFTs
  return nft;
}

// Create an array to hold the minted NFTs
const nftArray = [];

// Create some NFTs using the mintNFT function and add them to the array
const nft1 = mintNFT("NFT 1", "Description 1", "Artist 1");
nftArray.push(nft1);

const nft2 = mintNFT("NFT 2", "Description 2", "Artist 2");
nftArray.push(nft2);

const nft3 = mintNFT("NFT 3", "Description 3", "Artist 3");
nftArray.push(nft3);

// This function will print the metadata of all NFTs in the array
function listNFTs() {
  nftArray.forEach((nft) => {
    console.log("Name: " + nft.name);
    console.log("Description: " + nft.description);
    console.log("Artist: " + nft.artist);
    console.log("------------------------");
  });
}

// Print the total number of NFTs minted
function getTotalSupply() {
  console.log("Total NFTs Minted: " + totalNFTs);
}

// Call the functions
listNFTs();
getTotalSupply();
