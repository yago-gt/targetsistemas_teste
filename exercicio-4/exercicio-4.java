import java.util.ArrayList;

class Exercicio4
{
    public static void main(String[] args)
    {
        String states[] = {
            "SP",
            "RJ",
            "MG",
            "ES",
            "Outros"
        };
        
        long values[] = {
            6783643,
            3667866,
            2922988,
            2716548,
            1984953
        };

        long total = 0;
        for (int i = 0; i < values.length; ++i) total += values[i];

        for (int i = 0; i < values.length; ++i)
        {
            double valor = (double)(values[i] * 100);
            System.out.format("%s: %.3f%%\n", states[i], valor/total);
        }

    }
}