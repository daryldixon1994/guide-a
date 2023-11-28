export const loginSession = () => {
    return {
      type: "SESSION_ACTIVE",
    };
}
export const logoutSession = () => {
    return {
      type: "SESSION_CLOSED",
    };
}