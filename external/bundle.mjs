// re-export symbols needed by the extension, then `npm run js`
export { getPublicKey, utils as ed25519 } from "@noble/ed25519";
export { base58btc } from "multiformats/bases/base58";
export { base64url } from "multiformats/bases/base64";
export { encode as varint } from "varint";
