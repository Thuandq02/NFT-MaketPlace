// Graph

https://thegraph.academy/developers/local-development/


// ipfs appimage

https://github.com/ipfs/ipfs-desktop#linuxfreebsd

//create app ipfs

graph codegen && graph build
graph create --node http://localhost:8020/ thuandq/dev
graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001/
