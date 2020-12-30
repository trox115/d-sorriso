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
        subNav: [
            {
                title: 'Em stock',
                path: '/stock',
          },
          {
            title: 'Encomendar',
            path:'/editarCliente'
        },
        {
            title: 'Custo Material',
            path:'/editarCliente'
        },
        ]
    },

    {
        title: 'Orçamentos',
        path: '/clientes',
        icon: <AiIcons.AiFillHome />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Novo',
                path: '/stock',
          },
          {
            title: 'Aceites',
            path:'/editarCliente'
        },
        ]
    },
    {
        title: 'Educação',
        path: '/clientes',
        icon: <AiIcons.AiFillHome />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        subNav: [
          {
            title: 'Inserir video',
            path:'/editarCliente'
        },
        ]
    },
    {
        title: 'Chat',
        path: '/clientes',
        icon: <AiIcons.AiFillHome />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
    },
]
