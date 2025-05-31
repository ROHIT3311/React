import { useContext } from "react";
import { ChangeThemeContext } from "../../context/ChangeThemeContext";

export default function Content() {
  const { theme } = useContext(ChangeThemeContext);
  console.log(theme);
  return (
    <>
      <div
        className={`text-justify p-2 ${
          theme === "light"
            ? "bg-yellow-300 text-black"
            : "bg-gray-800 text-white"
        }`}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nihil ut
        explicabo eligendi earum sapiente ipsa sint voluptate asperiores nisi
        similique numquam eaque, voluptates necessitatibus quisquam unde
        mollitia omnis architecto? Quos tempore officia, provident maiores
        reiciendis ex, ipsum, voluptate sint consequatur ullam soluta officiis.
        Sit vel facere quod ut ipsa dignissimos hic. Cumque eum deleniti iure
        vitae mollitia nostrum eveniet. Facilis ducimus sunt, ratione placeat
        aliquam dolores error saepe distinctio id eaque qui non cum optio dolor
        dolore aperiam earum voluptatum impedit at. Blanditiis fugiat rem unde,
        deserunt voluptate enim. Maiores aut architecto quod quos fuga cum
        delectus sunt magni dolorem consequatur praesentium fugiat
        necessitatibus, fugit sapiente, expedita numquam. Natus perspiciatis eos
        voluptate ipsum distinctio consectetur deserunt architecto ipsam at.
        Quia iste voluptatibus amet iusto. Error cumque facilis dolores quidem
        beatae alias odit? Nam sit velit quidem perspiciatis ratione similique
        ipsum quisquam error! Quod delectus quo ipsum numquam vel obcaecati!
      </div>
    </>
  );
}
