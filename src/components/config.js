import IPConfig from "./ip/config"
import ButtonConfig from "./button/config"
import TextConfig from "./text/config"
import SelectConfig from "./select/config"
import CustomConfig from "./custom/config"
import RadioConfig from "./radio/config"
import CheckboxConfig from "./checkbox/config"

const allConfig = {
    CONTROL_IP:IPConfig,
    CONTROL_BUTTON:ButtonConfig,
    CONTROL_TEXT:TextConfig,
    CONTROL_SELECT:SelectConfig,
    LAYOUT_CUSTOM:CustomConfig,
    CONTROL_RADIO:RadioConfig,
    CONTROL_CHECKBOX:CheckboxConfig
}
export default allConfig