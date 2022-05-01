import {DEC} from "./counter-actions";
import {INC} from "./counter-actions";
import {RESET} from "./counter-actions";

export const counterReducer = (state, action) => {
    switch (action.type) {
        case DEC: {
            return state - 1
        }

        case INC: {
            return state + 1
        }

        case RESET: {
            return 0
        }

        default: {
            return state
        }
    }
}