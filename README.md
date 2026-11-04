# AnimeFlix

Um catálogo de descoberta de animes e mangás com visual inspirado em plataformas de streaming. Os dados vêm da API pública [Jikan](https://jikan.moe/), não oficialmente ligada ao MyAnimeList. O catálogo é consultado ao abrir o aplicativo, incluindo a temporada atual; novos títulos aparecem conforme disponibilizados pela API. Pesquise, veja detalhes e salve favoritos no dispositivo.

**O AnimeFlix não hospeda nem fornece reprodução de vídeos ou leitura de mangás.** Os links levam à página informativa do MyAnimeList. O site de referência não foi usado como fonte de código ou conteúdo. A disponibilidade e os limites da API são responsabilidade do serviço externo; sinopses podem estar em inglês. Os favoritos ficam no armazenamento local, sem sincronização entre dispositivos.

## Executar

Requisitos: Node.js 20 ou superior.

```sh
npm ci
npm run dev
```

Para gerar o site: `npm run build`. Publique a pasta `dist` em qualquer hospedagem estática HTTPS. Para desktop local, execute `npm run build` e `npm run desktop`.

## Builds no GitHub Actions

O workflow gera artefatos para download na página da execução: site estático, APK Android **debug**, instalador Windows e IPA iOS **não assinado**. O APK debug e o executável não são assinados para distribuição comercial. O IPA não assinado não pode ser instalado normalmente: distribuição em aparelhos iOS exige conta Apple Developer, certificados, provisioning profiles e assinatura apropriados. Para publicar nas lojas, configure assinatura e identidade próprias. Os builds dependem dos ambientes e ferramentas disponibilizados pelos runners do GitHub.

Para publicar no GitHub Pages, escolha **GitHub Actions** como origem em Settings → Pages e execute manualmente o workflow “Publicar site no GitHub Pages” na branch desejada.
