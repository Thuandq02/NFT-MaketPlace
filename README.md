// Graph

  https://thegraph.academy/developers/local-development/

// ipfs appimage

  https://github.com/ipfs/ipfs-desktop#linuxfreebsd

// config ipfs

ipfs config --json API.HTTPHeaders 

  {
    "Access-Control-Allow-Origin": ["*"],
    "Access-Control-Allow-Methods": ["PUT", "POST", "GET"],
    "Access-Control-Allow-Headers": ["Authorization", "Content-Type"]
  }

//create app ipfs

  graph codegen && graph build

  graph create --node http://localhost:8020/ thuandq/dev

  graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001/
