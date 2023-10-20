export default function getRenderUrl(renderName, paramsString) {
    //paramsString always begin with & not ?
    return `https://filtru.xyz/extension-render/${renderName}?r=CivaNCZHcuk5xYBgtyOV0xtIeIr6CqNyB0caQ6o3R8hGChszeIVOWebXi2T4dJRYGBWrrhU1bvjPvEFkJRCUOkNDjdAuzb39${paramsString}`
}