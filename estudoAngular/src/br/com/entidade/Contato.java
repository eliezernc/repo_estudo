package br.com.entidade;

import java.util.Date;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Contato {

	private String nome;
	private String telefone;
	private Date data;
	private Operadora operadora;
	private String cor;
	
	public Contato(){}
	
	public Contato(String nome, String telefone, Date data,Operadora operadora){
		this.nome = nome;
		this.telefone = telefone;
		this.operadora = operadora;
		this.data = data;
	}
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getTelefone() {
		return telefone;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}

	public void setOperadora(Operadora operadora) {
		this.operadora = operadora;
	}

	public Operadora getOperadora() {
		return operadora;
	}

	public String getCor() {
		return cor;
	}

	public void setCor(String cor) {
		this.cor = cor;
	}
}
