import { RouteInfo } from './vertical-menu.metadata';

import * as myGlobals from '../../service/global'; //<==== this one (**Updated**)



export const ROUTES: RouteInfo[] = [

  {
    path: '/inbox',
    title: 'Backoffice',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Sistem Analizi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Organizasyon',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Gelecek Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kalan Ekranlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Ekranlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Biten Ekranlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Reddedilen Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Sistem Tasarımı',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Scriptler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Excel Data Import',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Stok T Cetveli',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Menü Tasarımı',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Form Tasarımı',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Dashboard',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Rapor Tasarımı',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Rol Tasarımı',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Widget Tasarımı',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'API Tasarımı',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Kullanıcı Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Kayıtlı Firmalar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kullanıcılar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Sistem Yöneticileri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Log Takibi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Optimizasyon',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Amaç Fonksiyonları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'GA Senaryoları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'GA Performansları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'Anasayfa',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Dashboard',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, ]
  }, {
    path: '/inbox',
    title: 'SATIŞ',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Tanımlar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Para Birimleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Teslim Tanımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Proje İzleme Süreç',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İzleme Adımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Ödeme Yöntemleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Ülkeler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Sipariş Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Sipariş Fişleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Sipariş İzleme',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'CRM',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Müşteri Firmalar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Müşteri Ziyaretleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Müşteri Talepleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Firma Kur Tipleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Maliyet Dönemleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Teklif Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Veri Dağıtım Formu',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Yurtiçi Teklifler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Yurtdışı Teklifler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Bekleyen Teklif Kalemleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Satış Fırsatları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Sipariş Maliyet',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Maliyet Analizi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Maliyet Analiz Fiyatlandırma',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Hamur Maliyet',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Satış Raporları',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Sipariş Analiz Raporu',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Proforma İşlemleri',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'İç Proforma',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Dış Proforma',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'PROJE ARGE',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Tanımlamalar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Firma Karşılıkları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Ürün Tanıtım',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kalıp Tanıtım',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Hamur Konfeksiyon',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İstasyonlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Hamur Tanıtım',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Formülasyon',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kalıp Sistemi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Renkler ',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Yeni Ürün Siparişleri',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Revizyon Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Ppap Kayıtları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Değişiklik Yönetimi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Ppap Seviyeleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Yeni Ürün Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Yeni Ürün İBO',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Laboratuar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Reometre Kayıtları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Reometre Çizelge Değerleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Satış Destek',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Veri Dağıtım Formu',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Maliyet Analizi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'Raporlama(BI)',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Kaynak Raporları',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Makine KKO',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İşgücü KKO',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Darboğaz Kaynaklar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Duruş Özet Raporu',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'İşemri Raporları',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'İş Emri FACC',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Operasyon FACC',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kaynak FACC',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İş Emri İzleyici',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Bekleme Raporu',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Kalite Raporları',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Makine Hata Oranları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Ürün Hata Oranları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Aylık Hata Değişimi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Bakım Raporları',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Bakım Gerçekleşme',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Makine Bakım Çizelgesi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Makine Arıza Raporu',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'MALZEME VE STOK YÖNETİMİ',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Tanımlar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Raf Listesi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Ambar Tanımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Stok Grup Kodları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Malzeme',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Hammadde Kartları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Yarımamul Kartları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Üretim Yöntemleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Ticari Mallar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Tedarikçi Ürün Kartları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Mamul Kartları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Stok İşlemleri',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Stok Hareketleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Stok Hareket Kodları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Stok Giriş Fişleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Depo Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Stok Durumları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kritik Stoklar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Stok Sayımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'Kullanıcı',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Şifre Değiştir',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Çıkış Yap',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Yardım',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Yeni Ticket',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Ticketlarım',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Uyarılar',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, ]
  }, {
    path: '/inbox',
    title: 'SATINALMA',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Tanımlar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Satıcı Grupları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Stok Politikaları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Tedarik Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Satıcı Listesi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'TedarikçixMalzeme',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Talep Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Yeni Sipariş',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Tüm Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Gelecek Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kabul Edilen Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Reddedilen Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Satınalma Teklifleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'MRP',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'MRP Tanımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Satınalma Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'İç Talepler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Bekleyen Talepler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Onaylanan Talepler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Satın Alma Teklifleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Satınalma Siparişleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Bekleyen Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kabul Edilen Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Reddedilen Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Onay Bekleyen Talepler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Son Onay Talepler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'M2M Fabrika Sistemi',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Üretim İç Talep',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'İş Emri ve Operasyon',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Yeni İş Emri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Aktif İş Emirleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Biten İş Emirleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Operasyonlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Makine Log İzleme',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Bakım Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Makine Bakım Prosedür',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Bakım Planlama',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Planlı Bakımlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Onarıcı Bakımlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Arıza Kayıtları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Proje Ar-Ge',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Figürler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Hamur Konfeksiyon',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Formül Yapıları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Hamur Tanıtım',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Kaynak Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Duruş Tanımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Duruş Grupları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Masraf Merkezleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Prosesler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İş İstasyonları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İş Merkezleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İstasyon Grupları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İşgücü',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Vardiyalar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'İleri Çizelgeleme',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Gantt Şeması',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Tesis Planı',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Optimizasyon',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Termin Tahminleyici',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Kalite Kontrol',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Kalite Kontrol Listesi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Hatalı Üretimler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Düzeltici ve Önleyici Faaliyet Formu ',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Sipariş Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Yeni Sipariş',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Bekleyen Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Devam Eden Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Tamamlanan Siparişler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'İNSAN KAYNAKLARI',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Polivalans Tablosu',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Tanımlar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Ünvanlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Departmanlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Tatiller',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İzin Hakları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Polivalans',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Özlük İşleri',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Özlük Bilgileri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İş Başvuruları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Pozisyonlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Zimmet',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Emeklilik ve Çıkış',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Personel İcra',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Performans Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Performans Ölçütleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Değerlendirme',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Maaş Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Avans Talepleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Maaş Dönemleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Eğitim ve Geliştirme',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Planlanan Eğitimler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Biten Eğitimler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Personel Harcırah',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Talepler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Onaylananlar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Reddedilenler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'PDKS',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Günlük Giriş Çıkış',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Devamsızlık',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Cihaz Tanımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Puantaj',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'İzin Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'İzin Talepleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Reddedilen İzinler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Onaylı İzinler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'İSG Yönetimi',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Eylem Planları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'İş Kazaları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Raporlama',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Yıllık İzin Raporu',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Zimmet Raporu',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'Döküman Yönetim',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Dökümantasyon',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Tanımlar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Standart Maddeler',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Döküman Tipleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  }, {
    path: '/inbox',
    title: 'BİLGİ İŞLEM',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Mesajlar',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'IP Listesi',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Değer Listesi',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Firmalar',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Bildirimler',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Ticket Sistemi',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Kur Aktarımları',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, {
      path: '/inbox',
      title: 'Bildirim Kuralları',
      icon: 'ft-mail',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
    }, ]
  }, {
    path: '/inbox',
    title: 'MUHASEBE',
    icon: 'ft-mail',
    class: 'has-sub',
    badge: '',
    badgeClass: '',
    isExternalLink: false,
    submenu: [{
      path: '/inbox',
      title: 'Cari İşlemler',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Tahsilat Fişleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Tediye Fişleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Çek-Senet Yönetimi',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Cari Virman',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kasa Virman',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Cari Bakiye Dökümü',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Tanımlar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Pos Tanımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Şirket Tanımları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Vergi Oranları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Gider Türleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Alım Fatura-İrsaliye',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Alım Faturaları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Alım İrsaliyeleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Alım Fişleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Satış Fatura-İrsaliye',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Satış Faturaları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Satış İrsaliyeleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Satış Fişleri',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, {
      path: '/inbox',
      title: 'Cari Hesaplar',
      icon: 'ft-mail',
      class: 'has-sub',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: [{
        path: '/uikit/feather',
        title: 'Alıcılar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Satıcılar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Alıcı-Satıcılar',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Personel Hesapları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Banka Hesapları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Kasa Hesapları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Gelir Hesapları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, {
        path: '/uikit/feather',
        title: 'Gider Hesapları',
        icon: 'ft-arrow-right submenu-icon',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
      }, ]
    }, ]
  },
    ]


//Sidebar menu Routes and data
export const ROUTES2: RouteInfo[] = [

  {
    path: '', title: myGlobals.anasayfa, icon: 'ft-home', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/dashboard/dashboard1', title: myGlobals.yoneticianasayfa, icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/dashboard/dashboard2', title: myGlobals.satinalmaanasayfa, icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/dashboard/dashboard3', title: myGlobals.satisanasayfa, icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/dashboard/dashboard4', title: myGlobals.planlamaanasayfa, icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/dashboard/dashboard5', title: myGlobals.uretimanasayfa, icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/dashboard/dashboard6', title: myGlobals.depoanasayfa, icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/dashboard/dashboard7', title: myGlobals.kalitekontrolanasayfa, icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  
  {
    path: '', title: myGlobals.isaraclari, icon: 'ft-aperture', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/inbox', title: myGlobals.ticketsistemi, icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/chat', title: myGlobals.chat, icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/taskboard', title: myGlobals.gorevtakibi, icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/calendar', title: myGlobals.takvim, icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  }
  ,
  {
    path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/uikit/grids', title: 'Grid', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/typography', title: 'Typography', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/helperclasses', title: 'Helper Classes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/textutilities', title: 'Text Utilities', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/colorpalettes', title: 'Color Palette', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      {
        path: '', title: 'Icons', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          { path: '/uikit/feather', title: 'Feather Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
      },
    ]
  },
  {
    path: '', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '', title: 'Bootstrap', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          { path: '/components/buttons', title: 'Buttons', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/ng-buttons', title: 'NG Buttons', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/alerts', title: 'Alerts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/badges', title: 'Badges', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/dropdowns', title: 'Dropdowns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/media', title: 'Media Objects', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/pagination', title: 'Pagination', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/progress', title: 'Progress Bars', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/models', title: 'Modals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/collapse', title: 'Collapse', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/lists', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/accordion', title: 'Accordion', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/carousel', title: 'Carousel', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/popover', title: 'Popover', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/rating', title: 'Rating', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/navs', title: 'Navs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/tooltip', title: 'Tooltip', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/typeahead', title: 'Typeahead', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
      },
      {
        path: '', title: 'Extra', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          { path: '/components/sweetalerts', title: 'Sweet Alert', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/toastr', title: 'Toastr', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/nouislider', title: 'NoUI Slider', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/upload', title: 'Upload', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/dragndrop', title: 'Drag and Drop', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/tour', title: 'Tour', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/cropper', title: 'Image Cropper', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/avatar', title: 'Avatar', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/swiper', title: 'Swiper', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
      },
    ]
  },
  {
    path: '', title: 'Forms', icon: 'ft-edit', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false,
    submenu: [
      {
        path: '', title: 'Elements', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          { path: '/forms/inputs', title: 'Inputs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/input-groups', title: 'Input Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/radio', title: 'Radio', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/checkbox', title: 'Checkbox', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/switch', title: 'Switch', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/select', title: 'Select', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/editor', title: 'Editor', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/tags', title: 'Input Tags', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/datepicker', title: 'Datepicker', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/timepicker', title: 'Timepicker', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
      },
      { path: '/forms/layout', title: 'Layouts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/forms/validation', title: 'Validation', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/forms/archwizard', title: 'Wizard', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '', title: 'Tables', icon: 'ft-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/tables/basic', title: 'Basic', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/tables/extended', title: 'Extended', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/tables/tables', title: 'Angular', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '/datatables', title: 'Data Tables', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '', title: 'Cards', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/cards/basic', title: 'Basic Cards', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/cards/advanced', title: 'Advanced Cards', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Maps', icon: 'ft-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/maps/google', title: 'Google Map', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Charts', icon: 'ft-bar-chart-2', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false,
    submenu: [
      { path: '/charts/chartjs', title: 'ChartJs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/charts/chartist', title: 'Chartist', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/charts/apex', title: 'Apex', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/charts/ngx', title: 'NGX', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '', title: 'Authentication', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          { path: '/pages/forgotpassword', title: 'Forgot Password', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
          { path: '/pages/login', title: 'Login', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
          { path: '/pages/register', title: 'Register', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
          { path: '/pages/lockscreen', title: 'Lock Screen', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
      },
      { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      {
        path: '', title: 'Vertical Timeline', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          { path: '/pages/timeline-vertical-center', title: 'Center', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pages/timeline-vertical-left', title: 'Left', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pages/timeline-vertical-right', title: 'Right', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
      },
      {
        path: '', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          { path: '/pages/users-list', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pages/users-view', title: 'View', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pages/users-edit', title: 'Edit', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
      },
      { path: '/pages/account-settings', title: 'Account Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/profile', title: 'User Profile', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/invoice', title: 'Invoice', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/error', title: 'Error', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
      { path: '/pages/comingsoon', title: 'Coming Soon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
      { path: '/pages/maintenance', title: 'Maintenance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
      { path: '/pages/gallery', title: 'Gallery', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/search', title: 'Search', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/faq', title: 'FAQ', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/kb', title: 'Knowledge Base', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-book', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
  { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
];
