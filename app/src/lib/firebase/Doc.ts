import {DocumentData} from "./DocumentData";
import {DocumentSnapshot} from "./DocumentSnapshot";
import {ClientSideDocument} from "./ClientSideDocument";

export type Doc<T = DocumentData> = DocumentSnapshot<T> | ClientSideDocument<T>;