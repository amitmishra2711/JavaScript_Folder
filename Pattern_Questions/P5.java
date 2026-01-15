public class P5 {
    public static void main(String args[])
    {
        int row=5;
        for (int i=1;i<=row;i++)
        {
             if(i%2==0)
                    {
                    for(int j=1;j<=i;j++)
                {
                    if (j%2!=0) {
                        System.out.print("0 ");
                    }else{
                         System.out.print("1 ");
                    }
                }
            }
                else
                    {
                    for(int j=1;j<=i;j++)
                {
                     if(j%2==0) {
                        System.out.print("0 ");
                    }else{
                         System.out.print("1 ");
                    }
                }  
                }        
           
    }

}
