#Apontamentos desta aula

**Como implementar diretamente o JavaScript no HTML**

-> Utilizando (script> </script), e escrevemos o código entre os dois parâmetros

-> Quando o arquivo é externo utilizámos na mesma esses parâmetros, só difere que o temos de reencaminhar para o ficheiro onde o vamos escrever : **script src="..." /script**

-> Colocamos sempre dentro do body, mais para o final da página para otimização de desempenho e garantirmos que o conteúdo principal aparece primeiro

-> Código alerta, insere automaticamente o que estiver dentro de () no ecrã do utilizador

-> Se preferirmos colocar no head, há alguns atributos que podemos utilizar para melhorar o desempenho e evitar atrasos na renderização: 

    - **Async** : Permite que o navegador continue a renderizar a página web enquanto baixa o script em segundo plano

    - **Defer** : Garante que o script seja executado após a renderização completa do documento
  
-> O javascript é executado de forma linear : a primeira linha é executada e só depois as subsequentes

-> É possível escrever na consola, escrever e declarar variáveis, isso oferece flexibilidade ao testar e depurar codigos.
