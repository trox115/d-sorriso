import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const Sidebardata = [
    {
        title: 'Clientes',
        path: '/clientes',
        icon: <AiIcons.AiFillHome />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Inserir',
                path: '/novoCliente',
          },
          {
              title: 'Editar',
              path:'/editarCliente'
          },
        ]
    },
    {
        title: 'Armazem',
        path: '/clientes',
        icon: <AiIcons.AiFillHome />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
    }
]
