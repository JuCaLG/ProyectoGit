const EstructuraForm = {
	"almacenes": [
		{
			"type":"text",
			"titulo":"Almacen",
			"nombre":"nom_almacen",
			"icon":"puzzle-piece"
		},
		{
			"type":"picker",
			"titulo":"Usuario",
			"nombre":"id_usuario",
			"icon":"puzzle-piece",
			"tabla": "usuarios"
		}
	],
	"categorias":[
		{
			"type":"text",
			"titulo":"Categoria",
			"nombre":"nom_categoria",
			"icon":"puzzle-piece"
		},
		{
			"type":"area",
			"titulo":"Descripcion",
			"nombre":"des_categoria",
			"icon":"puzzle-piece"
		}
	],
	"comprobantes_ventas":[
		{
			"type":"picker",
			"titulo":"Venta",
			"nombre":"id_venta",
			"icon":"puzzle-piece",
			"tabla": "ventas"
		},
		{
			"type":"text",
			"titulo":"Comprobante",
			"nombre":"img_comprobante",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Tipo Comprobante",
			"nombre":"tipo_comprobante",
			"icon":"puzzle-piece"
		}
	],
	"comprobantes_entradas":[
		{
			"type":"picker",
			"titulo":"Entrada",
			"nombre":"id_entrada",
			"icon":"puzzle-piece",
			"tabla": "entradas"
		},
		{
			"type":"text",
			"titulo":"Comprobante",
			"nombre":"img_comprobante",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Tipo Comprobante",
			"nombre":"tipo_comprobante",
			"icon":"puzzle-piece"
		}
	],
	"direcciones_usuarios": [
		{
			"type":"picker",
			"titulo":"Usuario",
			"nombre":"id_usuario",
			"icon":"puzzle-piece",
			"tabla": "usuarios"
		},
		{
			"type":"text",
			"titulo":"País",
			"nombre":"pais",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Estado",
			"nombre":"estado",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Domicilio",
			"nombre":"domicilio",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Referencias",
			"nombre":"referencia",
			"icon":"puzzle-piece"
		}
	],
	"direcciones_proveedores": [
		{
			"type":"picker",
			"titulo":"Proveedor",
			"nombre":"id_proveedor",
			"icon":"puzzle-piece",
			"tabla": "proveedores"
		},
		{
			"type":"text",
			"titulo":"Pais",
			"nombre":"pais",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Estado",
			"nombre":"estado",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo": "Direccion",
			"nombre":"dirección",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Referencias",
			"nombre":"referencia",
			"icon":"puzzle-piece"
		}
	],
	"entradas": [
		{
			"type":"picker",
			"titulo":"Proveedor",
			"nombre":"id_proveedor",
			"icon":"puzzle-piece",
			"tabla": "proveedores"
		},
		{
			"type":"picker",
			"titulo":"Producto",
			"nombre":"id_producto",
			"icon":"puzzle-piece",
			"tabla": "productos"
		},
		{
			"type":"picker",
			"titulo":"Usuario",
			"nombre":"id_usuario",
			"icon":"puzzle-piece",
			"tabla": "usuarios"
		},
		{
			"type":"text",
			"titulo":"Precio Compra",
			"nombre":"precio_compra",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Cantidad",
			"nombre":"cantidad",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Total",
			"nombre":"total",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Estado de Pago",
			"nombre":"status_pago",
			"icon":"puzzle-piece"
		},
		{
			"type":"picker",
			"titulo":"Tipo Pago",
			"nombre":"id_tipo_pago",
			"icon":"puzzle-piece",
			"tabla": "tipo_pagos"
		},
		{
			"type":"text",
			"titulo":"Fecha de Compra",
			"nombre":"fecha_compra",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Fecha de Pago",
			"nombre":"fecha_pago",
			"icon":"puzzle-piece"
		}
	],
	"producto_almacenes": [
		{
			"type":"picker",
			"titulo":"Almacen",
			"nombre":"id_almacen",
			"icon":"puzzle-piece",
			"tabla": "almacenes"
		},
		{
			"type":"picker",
			"titulo":"Producto",
			"nombre":"id_producto",
			"icon":"puzzle-piece",
			"tabla": "productos"
		},
		{
			"type":"text",
			"titulo":"Precio Compra",
			"nombre":"precio_compra",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Precio Venta",
			"nombre":"precio_venta",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Stock Deseado",
			"nombre":"stok_deseado",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Stock Real",
			"nombre":"stock_real",
			"icon":"puzzle-piece"
		}
	],
	"productos": [
		{
			"type":"picker",
			"titulo":"Categoria",
			"nombre":"id_categoria",
			"icon":"puzzle-piece",
			"tabla": "categorias"
		},
		{
			"type":"picker",
			"titulo":"Proveedor",
			"nombre":"id_proveedor",
			"icon":"puzzle-piece",
			"tabla": "proveedores"
		},
		{
			"type":"text",
			"titulo":"Producto",
			"nombre":"nom_producto",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Descripcion Corta",
			"nombre":"descripcion_c",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Descripcion Larga",
			"nombre":"descripcion_l",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Precio Compra",
			"nombre":"prec_compra",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Detalle",
			"nombre":"detalle",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"QR",
			"nombre":"qr_producto",
			"icon":"puzzle-piece"
		}
	],
	"proveedores": [
		{
			"type":"text",
			"titulo":"Proveedor",
			"nombre":"nom_proveedor",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"RFC",
			"nombre":"rfc_proveedor",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Dirección",
			"nombre":"dir_proveedor",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Telefono",
			"nombre":"tel_proveedor",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Correo",
			"nombre":"email_proveedor",
			"icon":"puzzle-piece"
		}
	],
	"regiones": [
		{
			"type":"text",
			"titulo":"Región",
			"nombre":"nom_region",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Descripción",
			"nombre":"desc_region",
			"icon":"puzzle-piece"
		}
	],
	"sucursales": [
		{
			"type":"text",
			"titulo":"Sucursal",
			"nombre":"nom_sucursal",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Estado",
			"nombre":"estado",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Municipio",
			"nombre":"municipio",
			"icon":"puzzle-piece"
		},
		{
			"type":"picker",
			"titulo":"Region",
			"nombre":"id_region",
			"icon":"puzzle-piece",
			"tabla": "regiones"
		}
	],
	"tipo_pagos": [
		{
			"type":"text",
			"titulo":"Tipo Pago",
			"nombre":"nom_tipo",
			"icon":"puzzle-piece"
		}
	],
	"tipo_usuarios": [
		{
			"type":"text",
			"titulo":"Tipo Usuario",
			"nombre":"nom_tipo",
			"icon":"puzzle-piece"
		}
	],
	"usuarios": [
		{
			"type":"text",
			"titulo":"Usuario",
			"nombre":"nom_usuario",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Correo",
			"nombre":"email_usuario",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Telefono",
			"nombre":"tel_usuario",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Contraseña",
			"nombre":"pass_usuario",
			"icon":"puzzle-piece"
		},
		{
			"type":"picker",
			"titulo":"Tipo Usuario",
			"nombre":"id_tipo_usuario",
			"icon":"puzzle-piece",
			"tabla": "tipo_usuarios"
		},
		{
			"type":"picker",
			"titulo":"Sucursal",
			"nombre":"id_sucursal",
			"icon":"puzzle-piece",
			"tabla": "sucursales"
		},
	],
	"ventas": [
		{
			"type":"picker",
			"titulo":"Producto",
			"nombre":"id_prod_alm",
			"icon":"puzzle-piece",
			"tabla": "producto_almacenes"
		},
		{
			"type":"text",
			"titulo":"Precio Compra",
			"nombre":"precio_compra",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Precio Venta",
			"nombre":"precio_venta",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Cantidad",
			"nombre":"cantidad",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Total",
			"nombre":"total",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Estado Pago",
			"nombre":"status_pago",
			"icon":"puzzle-piece"
		},
		{
			"type":"picker",
			"titulo":"Tipo Pago",
			"nombre":"id_tipo_pago",
			"icon":"puzzle-piece",
			"tabla": "tipo_pagos"
		},
		{
			"type":"text",
			"titulo":"Fecha Compra",
			"nombre":"fecha_compra",
			"icon":"puzzle-piece"
		},
		{
			"type":"text",
			"titulo":"Fecha Pago",
			"nombre":"fecha_pago",
			"icon":"puzzle-piece"
		}
	]
}

export default EstructuraForm;