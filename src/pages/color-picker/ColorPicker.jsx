import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

import { Header } from "../../components";

const change = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header title="Color Picker" category="App" />
      <div className="text-center">
        <div id="preview" />
      </div>
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Palete</p>
          <ColorPickerComponent
            id="inline-palete"
            mode="Palette"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
          />
        </div>
        <div>
          <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
          <ColorPickerComponent
            id="inline-palete"
            mode="Picker"
            modeSwitcher={false}
            inline
            showButtons={false}
            change={change}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
