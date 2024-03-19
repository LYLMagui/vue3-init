// 定义一个接口，用于限制person对象的具体属性，并暴露出去
export interface PersonInter {
  id: string;
  name: string;
  age: number;
}

// 使用泛型自定义一个类型
export type Persons =  Array<PersonInter>
