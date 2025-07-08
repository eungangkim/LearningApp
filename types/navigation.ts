export type RootStackParamList = {
  Home: undefined;
  Profile: { id: number; ClassName: string; ProfName: string ,Description:string,files: { name: string; uri: string }[]};
  Detail: undefined;
  Post: undefined;
};
