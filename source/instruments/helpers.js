export function getDisplayName (WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export function sorter (a, b) {
    if (
        !a.get("completed") * 10 + a.get("favorite") >
        !b.get("completed") * 10 + b.get("favorite")
    ) {
        return -1;
    }
    if (
        !a.get("completed") * 10 + a.get("favorite") <
        !b.get("completed") * 10 + b.get("favorite")
    ) {
        return 1;
    }
    if (
        !a.get("completed") * 10 + a.get("favorite") ===
        !b.get("completed") * 10 + b.get("favorite")
    ) {
        if (a.get("created") >= b.get("created")) {
            return -1;
        }
        if (a.get("created") < b.get("created")) {
            return 1;
        }
    }
}

export function getFilteredTodos (todos, filter) {
    return filter !== ""
        ? todos
            .filter((item) => item.get("message").includes(filter))
            .sort(sorter)
        : todos.sort(sorter);
}
