export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'currbala' : IDL.Func([], [IDL.Int], ['query']),
    'topup' : IDL.Func([IDL.Int], [IDL.Int], []),
    'withd' : IDL.Func([IDL.Int], [IDL.Int], []),
  });
};
export const init = ({ IDL }) => { return []; };
