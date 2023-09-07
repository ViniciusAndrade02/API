const botao = document.querySelectorAll('.botao')



function indexbotao(index){

  if(index == 0) {
    
    buscarplaylist('PLcPzm_y4QsgKnB1j2siCUiUV2N4bLASqf');

  }else if(index == 1){
    buscarplaylist('PLcPzm_y4QsgJWLa67TKGRuQynFtoAbT2p')
  }else if(index == 2){
    buscarplaylist('PLQ8hE68msE1f98nKv6fy2KHK_ZwM8ay-D')
  }else if(index ==3){
    buscarplaylist('PLWAIQoZWLWkABmrfaYZVHJKmQWi-1CgO1')
  }
}


botao.forEach((item,index) => {

  item.addEventListener('click',() => {
    indexbotao(index)
  })
})


async function buscarplaylist(PLAYLIST){
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST}&key=AIzaSyCRC-rcXFnlIqQx-HPeOezj-cdi0Q41ris`
  const buscar = await fetch(url);
  const formatar = await buscar.json();

    const remove = document.querySelectorAll('.removeriframe')
    remove.forEach((item) => {
      item.remove()
    })

    const playerElement = document.getElementById('player');

    // Crie uma lista de vídeos incorporados para todos os itens da playlist.
    formatar.items.forEach(item => {
      const videoId = item.snippet.resourceId.videoId;
      const videoIframe = document.createElement('iframe');
      videoIframe.width = '400';
      videoIframe.height = '520';
      videoIframe.classList.add('removeriframe')
      videoIframe.src = `https://www.youtube.com/embed/${videoId}`;
      videoIframe.frameborder = '0';
      videoIframe.allowfullscreen = true;
      playerElement.appendChild(videoIframe);
    });


}



