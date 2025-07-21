export type RootStackParamList = {
  Home: undefined;
  Profile: {
    id: number;
    ClassName: string;
    ProfName: string;
    Description: string;
    files: FileType[];
  };
  Detail: undefined;
  Post: undefined;
  Search:undefined;
  Personal:undefined;
  FilePreview:{file:FileType};
  EditProfile:undefined;
};
export type FileType = {
  name: string;
  uri: string;
};
