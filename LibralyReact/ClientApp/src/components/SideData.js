import React from 'react';


export function SideData() {
    const list=dataList.map(dtList=>
    <li key={dtList.id}>
        <a>{dtList.title}</a>
    </li>
    )
    return (
        list
    );
}


const dataList=[
    {
      id:0,  title:" ws",URL:"Https://google.com"
    },
    {
      id:1,  title:"Ya",URL:"Https://ya.ru"
    },
    {
       id:2, title:" vk",URL:"Https://vk.com"
    }
];