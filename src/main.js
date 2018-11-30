import S from "s-js";
import { AppView } from "./AppView.jsx";

S.root( () => {
	document.body.appendChild( AppView() );
} );