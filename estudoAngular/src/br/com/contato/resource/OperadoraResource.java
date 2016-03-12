package br.com.contato.resource;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import br.com.entidade.Contato;
import br.com.entidade.Operadora;

@Path("/operadora.resource")
public class OperadoraResource {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Operadora> getOperadoras(){
		List<Operadora> lista = new ArrayList<Operadora>();
		List<Contato> listaContato = new ArrayList<Contato>();
		Operadora operadora = new Operadora("Oi", "12","Celular", 3);
		listaContato.add(new Contato("teste", "234234", new Date(), operadora));
		operadora.setContatos(listaContato);
		
		lista.add(operadora);
		lista.add(new Operadora("Tim", "12","Celular", 4));
		lista.add(new Operadora("Vivo", "12","Celular", 6));
		lista.add(new Operadora("Embratel", "12","Fixo", 7));
		lista.add(new Operadora("GVT", "12","Fixo", 8));
		lista.add(new Operadora("NET", "12","Fixo", 9));
		
		return lista;
	}
	
}
