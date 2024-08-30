import { Player } from "./player";

export type Axis = {
  x: keyof Player;
  y: keyof Player;
};
