import allConfig from "@components/config"

export function getDefaultConfig(controlKey){
    if(!controlKey){
        return 
    }
    let config = Lodash.cloneDeep(allConfig[controlKey])
    return config
}