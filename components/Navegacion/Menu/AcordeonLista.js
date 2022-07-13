const AcordeonLista = [
  {
    title: 'Productos',
    icon: "alpha-p-circle",
    listItem: [
      {
        icon: 'tag-multiple',
        label: 'Categorias',
        go: "Listar",
        params: { tabla: 'categorias' },
      },
      {
        icon: 'qrcode',
        label: 'Productos',
        go: "Listar",
        go: "Listar",
        params: { tabla: 'productos' },
      },
      {
        icon: 'store',
        label: 'Almacen',
        go: "Listar",
        params: { tabla: 'almacenes' },
      },
      {
        icon: 'clipboard-check-outline',
        label: 'Productos Almacen',
        go: "Listar",
        params: { tabla: 'producto_almacenes' },
      },
    ],
  },
  {
    title: 'Proveedores',
    icon: "truck",
    listItem: [
      {
        icon: 'truck-delivery',
        label: 'Proveedor',
        go: "Listar",
        params: { tabla: 'proveedores' },
      },
      {
        icon: 'map-marker',
        label: 'Direccion Proveedores',
        go: "Listar",
        params: { tabla: 'direcciones_proveedores' },
      },
    ],
  },
  {
    title: 'Usuarios',
    icon: "account-multiple",
    listItem: [
      {
        icon: 'account-circle',
        label: 'Usuarios',
        go: "Listar",
        params: { tabla: 'usuarios' },
      },
      {
        icon: 'map-marker',
        label: 'Direccion Usuarios',
        go: "Listar",
        params: { tabla: 'direcciones_usuarios' },
      },
      {
        icon: 'format-list-bulleted-type',
        label: 'Tipo Usuarios',
        go: "Listar",
        params: { tabla: 'tipo_usuarios' },
      },
    ],
  },
  {
    title: 'Movimientos',
    icon: "cards",
    listItem: [
      {
        icon: 'cash-register',
        label: 'Ventas',
        go: "Listar",
        params: { tabla: 'ventas' },
      },
      {
        icon: 'file-document-outline',
        label: 'Comprobantes Ventas',
        go: "Listar",
        params: { tabla: 'comprobantes_ventas' },
      },
      {
        icon: 'shopping',
        label: 'Compras',
        go: "Listar",
        params: { tabla: 'entradas' },
      },
      {
        icon: 'file-document',
        label: 'Comprobantes Compras',
        go: "Listar",
        params: { tabla: 'comprobantes_entradas' },
      },
      {
        icon: 'format-list-bulleted-type',
        label: 'Tipo Pagos',
        go: "Listar",
        params: { tabla: 'tipo_pagos' },
      },
    ],
  },
  {
    title: 'Sucursales',
    icon: "city-variant",
    listItem: [
      {
        icon: 'office-building',
        label: 'Sucursales',
        go: "Listar",
        params: { tabla: 'sucursales' },
      },
      {
        icon: 'map-marker',
        label: 'Regiones',
        go: "Listar",
        params: { tabla: 'regiones' },
      },
    ],
  }
];

export default AcordeonLista;

