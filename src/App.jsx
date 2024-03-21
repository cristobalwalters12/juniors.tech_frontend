import { Button } from "@material-tailwind/react";
import { CardDefault } from "../src/Components/Cards";
import { DialogDefault } from "../src/Components/dialog";
import { DefaultSidebar } from "../src/Components/sidebar";

function App() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center text-white">
        Ya esta Configurado!
      </h1>
      <Button>Button</Button>
      <div className="text-center">
        <CardDefault />
      </div>

      <div className="text-center">
        <DialogDefault />
      </div>

      <DefaultSidebar />
    </>
  );
}

export default App;
