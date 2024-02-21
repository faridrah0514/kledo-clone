import { TagsOutlined, PieChartOutlined, ShoppingCartOutlined, CreditCardOutlined, BarsOutlined } from '@ant-design/icons';
import Link from 'next/link';

const sidebarMenu = [
    getItem('Penjualan', 'penjualan', <ShoppingCartOutlined />, [
        getItem(<Link href='/penjualan/overview'>Overview</Link>, 'overview', <PieChartOutlined />),
        getItem('Tagihan', 'tagihan', <TagsOutlined />),
        getItem('Pengiriman', 'pengiriman', <TagsOutlined />),
        getItem('Pemesanan', 'pemesanan', <TagsOutlined />),
        getItem('Penawaran', 'penawaran', <TagsOutlined />),
    ]),
    getItem(<Link href='/biaya'>Biaya</Link>, 'biaya', <CreditCardOutlined />),
    getItem(<Link href='/akun'>Akun</Link>, 'akun', <BarsOutlined />),

]

function getItem(label, key, icon, children, type) {
    return { key, icon, children, label, type };

}

module.exports = { sidebarMenu }