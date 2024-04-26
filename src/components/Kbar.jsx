import PropTypes from "prop-types";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarSearch,
} from "kbar";
import RenderResults from "./RenderResults";
import { RocketLaunchIcon, StarIcon, PhoneIcon, FolderIcon } from "@heroicons/react/24/outline";

const actions = [
  {
    id: "probar",
    name: "Probar",
    icon: <RocketLaunchIcon height="1rem" color="rgba(0,0,0,.5)"/>,
    shortcut: ["b"],
    keywords: "probar la api de youtube",
    perform: () => (window.location.pathname = "api"),
  },
  {
    id: "get started",
    name: "Empezar",
    icon: <StarIcon height="1rem" color="rgba(0,0,0,.5)"/>,
    shortcut: ["s"],
    keywords: "probar el producto o get started",
    perform: () => (window.location.pathname = "doc"),
  },
  {
    id: "contact",
    name: "Contacto",
    icon: <PhoneIcon height="1rem" color="rgba(0,0,0,.5)"/>,
    shortcut: ["c"],
    keywords: "email o contactar",
    perform: () => (window.location.pathname = "contact"),
  },  
  {
    id: "documentation",
    name: "Documentacion",
    icon: <FolderIcon height="1rem" color="rgba(0,0,0,.5)"/>,
    shortcut: ["d"],
    keywords: "documentacion oficial de la api",
    perform: () => (window.location.pathname = "doc/"),
  }
];

export default function Kbar({ children }) {
  return (
    <KBarProvider actions={actions}>
      <KBarPortal>
        <KBarPositioner className="bg-gray-800/15">
          <KBarAnimator className="bg-white min-w-[29rem] shadow-sm [height:auto_!important] rounded-lg">
            <KBarSearch className="py-1 px-2 my-2 w-full outline-none" placeholder="Busca..."/>
            <div className="pt-4 px-2 pb-2 border-t-2 border-gray-400/50">
              <RenderResults />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </KBarProvider>
  );
}
Kbar.propTypes = {
  children: PropTypes.element
}