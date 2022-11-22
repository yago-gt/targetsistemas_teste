#include <stdio.h>

int main()
{
	int soma = 0;
	int k = 0;
	const int INDICE = 13;

	while (k < INDICE)
	{
		++k;
		soma += k;
	}

	printf("%d", soma);

	return 0;
}
