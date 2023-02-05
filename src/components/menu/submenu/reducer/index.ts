import { SUBMENU_INITIAL_STATE } from "../../menu";

type ISubMenuReducer = {
  isExpanded: boolean;
  currentIndex: number | null;
  previousIndex: number | null;
};

export enum SubMenuActionType {
  "Collapse" = "COLLAPSE",
  "Expand" = "EXPAND",
  "Move" = "MOVE",
}

interface ICollapseAction {
  type: SubMenuActionType.Collapse;
}

interface IExpandAction {
  type: SubMenuActionType.Expand;
}

interface IMoveAction {
  type: SubMenuActionType.Move;
  index: number;
}

export type ISubMenuActions = ICollapseAction | IExpandAction | IMoveAction;

export function submenuReducer(state: ISubMenuReducer, action: ISubMenuActions): ISubMenuReducer {
  switch (action.type) {
    case SubMenuActionType.Collapse:
      return { ...state, isExpanded: true };
    case SubMenuActionType.Expand:
      return SUBMENU_INITIAL_STATE;
    case SubMenuActionType.Move:
      return {
        ...state,
        isExpanded: true,
        currentIndex: action.index,
        previousIndex: state.currentIndex,
      };
    default:
      throw new Error(`${JSON.stringify(action)} not recognised`);
  }
}
