import React from 'react'
import Card from './Card'

const Main = () => {
  const ozetler = [
    {
      id: 1,
      name: 'Savaş Sanatı',
      author: 'Sun Tzu',
      description: "Çinli filozof Sun-Tzu'nun günümüzden 2.500 yıl önce yazdığı Savaş Sanatı adlı eser 13 bölümde toplanmış 384 savaş teorisinden oluşmaktadır. Bu teorilere temel olan ilkeler savaş alanında olduğu kadar ekonomi ve politika alanlarında da liderlere yol göstermektedir. En önemli ilkeler ise zaferin mümkün olduğu taktirde savaşsız kazanılması ile, savaş ve rekabette üstünlük kazanma yollarını bulmak için fiziki unsurları, psikolojik faktörleri ve politikayı doğru bir şekilde analiz etmektir. Savaş Sanatı strateji konusundaki en önemli kitaplardan birisidir. Ancak, Clausewitz'in Savaş Üzerine adlı yapıtı ile karşılaştırılabilir. 20.yüzyılın büyük liderlerinin çoğunun yararlandığı bu kitabın önemi, savaşla ilgili evrensel prensipleri keşfetmiş olmasından kaynaklanmaktadır. Sun-Tzu o derece günceldir ki, dünyanın bütün askeri akedemilerinde her yıl sayısız seminer ve tez konusu olmaktadır. Dolaylı Strateji kavramını ortaya atan Liddel-Hart'da fikirlerinin özünü Sun-Tzu'ya borçlu olduğunu saklamamaktadır. Bu ciltte Savaş Sanatını TAM METİN olarak okuyabilecek ve ayrıca her bölüm ile ilgili açıklamalı yorumları bulabileceksiniz. Keza Sun-Tzu'nun yaşadığı dönem ve tarihi çerçeve konusunda da geniş bir ek bilgilenme sağlanmaktadır.",
      image: '1.jpg',
    },
    {
      id: 2,
      name: 'Zengin Baba Yoksul Baba',
      author: 'Robert T. Kiyosaki',
      description: "Özellikle teknolojinin, robotların ve global bir ekonominin kuralları değiştirdiği bir dünyada, zengin olmak için yüksek gelirinizin olması gerektiği efsanesini çürütür. Aktif yatırımlar edinmenin ve oluşturmanın neden yüklü bir maaştan daha önemli olabileceğini, işletme sahiplerinin ve yatırımcıların keyfini sürdüğü vergi avantajlarını öğretir. Evinizin aktif bir yatırım olduğuna karşı meydan okur; emlak balonu patladığında ve yüksek faizli mortgage fiyaskosu şiddetlendiği zaman milyonlarca insanın doğrudan öğrendiği gibi. Bize okul sistemlerinin parayla ilgili öğrettiklerine neden güvenmememiz gerektiğini hatırlatır ve bu önemli yeteneğin neden bugün hiç olmadığı kadar önemli olduğunu açıklar.Çocuklarınıza paraya dair neler öğretmeniz gerektiğini açıklar, böylece onlar da günümüz dünyasının zorluklarına ve fırsatlarına kendilerini hazırlayabilir ve hak ettikleri zengin yaşamı sürebilir. “Zengin Baba Yoksul Baba, finansal geleceklerinin kontrolünü eline almak isteyenler için bir başlangıç noktasıdır.” -USA TODAY',",
      image: '2.jpg'
    },
    {
      id: 3,
      name: 'Suç ve Ceza',
      author: 'Fyodor Dostoyevski',
      description: "Rodya Romanoviç Raskolnikov, yoksul bir gençtir ve Petersburg Üniversitesinde başladığı hukuk eğitimini yarıda bırakmıştır. Batı'dan gelen siyasi ve felsefi düşüncelerin karışımı aklını meşgul etmektedir. Bir tefeciye duyduğu nefret, onu öldürmeye yönlendirir. Böylece hem finansal sorunlarından kurtulacak hem de dünyayı değersiz parazitlerden temizleyecektir. Raskolnikov, daha yüce bir amaç uğruna işlenen bir cinayetin kabul edilebilir olduğuna inanır. Hesaplar yaptıktan sonra kadının evine giderek onu baltayla vahşice öldürür. Ancak Alonya ile birlikte yaşayan ve kimseye zararı dokunmayan üvey kız kardeşi beklenmedik bir şekilde ortaya çıkar ve Raskolnikov onu da öldürmek zorunda kalır. Müşterilerin rehin olarak bıraktığı birkaç küçük süs eşyasını alır ve kimseye görünmeden oradan ayrılır.Raskolnikov, kimseye görünmeden kaçmış olsa da, son derece tedirgin hisseder ve bu durum, ailesi ve yakın çevresini de etkiler. Hayatında üç kadın vardır: müşfik annesi, kız kardeşi Dounia ve işsiz kâtibin kızı Sonia. Raskolnikov, Sonia ile ara sıra buluşup arkadaşlık eder. Ailesi, babasının ayyaşlığı yüzünden çok yoksuldur ve Sonia, onlara bakmak için fahişelik yapmaktadır. Raskolnikov, öldürdüğü kadının evinden aldıklarını ve diğer delilleri saklamak için çılgınca çabalamaktadır. Ödenmemiş bir borç yüzünden karakola çağrıldığında polislerin yanında baygınlık geçirir ve günlerce hasta yatar. Katilin cinayet yerine dönmesi kuralına uygun olarak yakalanmayı, rahatlamayı ve arınmayı ister. Öldürdüğü tefeci kadının evine giderek Komiser Porfiry Petroviç ile tanışır ve davranışlarıyla dikkat çekerek baş zanlı haline gelir. Zeki bir adam olan Komiser Porfiry Petroviç, Raskolnikov'un katil olduğunu düşünmektedir.Raskolnikov, Sonia'ya suçunu ve sevgisini itiraf eder. Sonia, fahişelik yapmasına rağmen inançlı ve iyi kalpli bir kızdır. Ona acır ve suçunu polise itiraf etmesi ve bedelini ödemesi gerektiğini söyler. Sonunda Raskolnikov'un vicdan azabı sayesinde suçunu itiraf eder. Sonuç olarak, Sibirya'ya sürgüne gönderilir. Sonia, onun serbest bırakılacağı günü beklemeye karar verir. Raskolnikov, yine de aşırı bir pişmanlık duymasa da, Sonia'nın etkisiyle kendisini dine adayabilecektir. ",
      image: '3.jpg'
    },
  ]

  return (
    <main>
        <div className="slider">
            <div className="slides">
                <div className="slide" style={{backgroundImage: "url('img/slider1.jpeg')"}}></div>
                <div className="slide" style={{backgroundImage: "url('img/slider2.jpeg')"}}></div>
                <div className="slide" style={{backgroundImage: "url('img/slider3.jpeg')"}}></div>
            </div>
            <button className="prev button">‹</button>
            <button className="next button">›</button>
        </div>
        <div className="container">
          <h3 className='mx-3 py-3'>Özetler</h3>
        </div>
        <hr />
        <div className="row mt-3">
            {
              ozetler.map((ozet) => (
                <div className="col-4" key={ozet.id}>
                  <Card ozet={ozet} />
                </div>
              ))
            }
        </div>
    </main>
  )
}

export default Main